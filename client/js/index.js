const url = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    articles: [],
    search: '',
    isLoggedIn: false,
    isPosition: '',
    updateId: '',
    updateTitle: '',
    updateContent: '',
    updateFeaturedImage: ''
  },
  created() {
    this.isPosition = 'list'
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true
      this.getAllArticle()
    }
  },
  methods: {
    getAllArticle() {
      axios
        .get(`${url}/articles/${localStorage.getItem('id')}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          this.articles = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // onSignIn(googleUser) {
    //   const profile = googleUser.getBasicProfile();
    //   console.log('ID: ' + profile.getId());
    //   console.log('Name: ' + profile.getName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail());
    //   const id_token = googleUser.getAuthResponse().id_token;

    //   axios
    //     .post(`${url}/users/login/google`, {
    //       id_token
    //     })
    //     .then(user => {
    //       localStorage.setItem('token', user.token)
    //       localStorage.setItem('id', user.id)
    //       localStorage.setItem('login', 'google')
    //     })
    //     .catch(err => {
    //       console.log('request failed', err.message)
    //     })
    // },
    successLogin() {
      this.isLoggedIn = true
      this.getAllArticle(localStorage.getItem('id'))
      this.isPosition = 'list'
    },
    deleteArticle(id) {
      swal({
        title: "Are you sure Delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios
              .delete(`${url}/articles/${id}`, {
                headers: {
                  token: localStorage.getItem('token')
                }
              })
              .then(() => {
                swal({
                  title: 'Success Deleted',
                  text: "You clicked the button!",
                  icon: "success",
                  button: "close!",
                });
                this.getAllArticle(localStorage.getItem('id'))
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
    },
    getUpdateDetail(id, title, content, image) {
      this.updateId = id
      this.updateTitle = title
      this.updateContent = content
      this.updateFeaturedImage = image
    },
    updateArticle(id, title, text, featuredImage) {
      let fd = new FormData()
      fd.append('title', title)
      fd.append('content', text)
      fd.append('featured_image', featuredImage)
      axios
        .put(`${url}/articles/${id}`, fd, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
        .then(() => {
          this.getAllArticle()
          swal({
            title: 'Success Updated',
            text: "You clicked the button!",
            icon: "success",
            button: "close!",
          });
          console.log('successfull updated')
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  },
  computed: {
    filterArticles() {
      return this.articles.filter(article => {
        return article.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
})

AOS.init();