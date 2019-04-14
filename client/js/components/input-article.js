Vue.component('input-article', {
  props: ['isPosition', 'articles'],
  data() {
    return {
      title: '',
      text: '',
      featured_image: null,
      author: ''
    }
  },
  methods: {
    addArticle() {
      let fd = new FormData()
      fd.append('title', this.title)
      fd.append('content', this.text)
      fd.append('featured_image', this.featured_image)
      fd.append('author', localStorage.getItem('id'))
      axios
        .post(`${url}/articles`, fd, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            this.title = ''
            this.text = ''
            this.featured_image = ''
            this.articles.unshift(data)
            this.$emit('success-add-articles')
            swal({  
              title: 'Success Add Article',
              text: "You clicked the button!",
              icon: "success",
              button: "close!",
            });
          })
          .catch(err => {
            console.log(err)
          })
    },
    getImage(event) {
      this.featured_image = event.target.files[0]
    }
  },
  template: `
    <div class="card shadow" id="input-article" v-if="isPosition == 'addNewArticle'" data-aos="fade-up">
      <h5 class="card-header">Add New Article</h5>
      <div class="card-body">
        <form method="POST" v-on:submit.prevent="addArticle">
          <div class="form-group">
            <label for="media">Add Media</label>
            <input type="file" v-on:change="getImage" class="form-control-file">
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" v-model="title" class="form-control" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <wysiwyg v-model="text" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  `,
  components: {
    wysiwyg: vueWysiwyg.default.component,
  }

})