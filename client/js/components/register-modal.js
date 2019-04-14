Vue.component('register-modal', {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      axios
        .post(`${url}/users`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
          .then(user => {
            console.log('successfull register')
            swal({
              title: "Success Register!",
              text: "You clicked the button!",
              icon: "success",
              button: "close!",
            });
            this.name = ''
            this.email = ''
            this.password = ''
          })
          .catch(err => {
            swal({
              title: `${err}`,
              text: "You clicked the button!",
              icon: "error",
              button: "close!",
            });
          })
    },
  },
  template: `
    <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="col-form-label">Name:</label>
                <input type="text" v-model="name" class="form-control" name="name" placeholder="Name" required>
              </div>
              <div class="form-group">
                <label class="col-form-label">Email:</label>
                <input type="text" v-model="email" class="form-control" name="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <label class="col-form-label">Password:</label>
                <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success" data-dismiss="modal" v-on:click="signup">Sign Up</button>
          </div>
          <div class="register-footer text-center">
            <p>Sudah punya akun? <br> silahkan <a href="#" data-toggle="modal" data-target="#login-modal" data-dismiss="modal">login</a></p>
          </div>
        </div>
      </div>
    </div>
  `
})