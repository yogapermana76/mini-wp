Vue.component('update-modal', {
  props: ['id', 'title', 'text', 'image'],
  data() {
    return {
      updateTitle: this.title,
      updateText: this.text,
      updateFeaturedImage: null
    }
  },

  watch: {
    text: function () {
      this.updateTitle = this.title
      this.updateText = this.text
    }
  },
  methods: {
    update() {
      this.$emit('process-update', this.id, this.updateTitle, this.updateText, this.updateFeaturedImage)
    },
    getImage(event) {
      this.updateFeaturedImage = event.target.files[0]
    }
  },
  template: `
    <div class="modal fade" id="update-modal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input type="file" class="form-control-file" v-on:change="getImage">
              </div>
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="updateTitle" class="form-control" placeholder="Title">
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <wysiwyg v-model="updateText" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success" data-dismiss="modal" v-on:click="update">Update</button>
          </div>
        </div>
      </div>
    </div>
  `,
  components: {
    wysiwyg: vueWysiwyg.default.component,
  }
})