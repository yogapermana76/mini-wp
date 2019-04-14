Vue.component('loginModal', {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .post(`${url}/users/login`, {
          email: this.email,
          password: this.password
        })
          .then(user => {
            const { token, id, email, name } = user.data
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            swal({
              title: "Success Login!",
              text: "You clicked the button!",
              icon: "success",
              button: "close!",
            });
            this.email = ''
            this.password = ''
            this.$emit('success-login')
          })
          .catch(err => {
            console.log('request failed', err.message)
            swal({
              title: 'email / password wrong!',
              text: "You clicked the button!",
              icon: "error",
              button: "close!",
            });
          })
    }
  },
  template: `
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-success" data-dismiss="modal" v-on:click="login">Login</button>
          </div>
          <div class="footer-modal">
            Login With Google?
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
        </div>
      </div>
    </div>
  `
})