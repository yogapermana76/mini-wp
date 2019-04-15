Vue.component('nav-bar', {
  props: ['isLoggedIn'],
  methods: {
    logout() {
      // const auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(function () {
      //   console.log('User signed out.');
      // });
      swal({
        title: "Are you sure Logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          localStorage.clear()
          this.$emit('success-logout')
          swal({
              title: 'Success Logout',
              text: "You clicked the button!",
            icon: "success",
            button: "close!",
          });
        }
      })
    },
  },
  template: `
    <div class="row shadow-lg text-light header d-flex align-items-center text-center">
      <div class=" col-md-2 py-4 logo">
        <i class="fab fa-wordpress"></i> Mini Wordpress
      </div>
      <div class="col-md-2 py-3 text-left">
        <button class="btn btn-sm btn-light" v-on:click="$emit('get-list')" v-if="isLoggedIn == true">
          <i class="far fa-credit-card"></i> Reader
        </button>
      </div>
      <div class="col-md-5 py-3"></div>
      <div class="col-md-1 py-3">
        <span class="btn btn-sm btn-light" v-if="isLoggedIn == true" v-on:click="$emit('get-input-article')"><i
            class="fas fa-edit"></i> write</span>
      </div>
      <div class="col-md-2" v-if="isLoggedIn == false">
        <div class="row">
          <div class="col-md-6 py-3" style="font-size: 25px">
            <button class="btn btn-sm btn-light" data-toggle="modal" data-target="#signup-modal"><i
                class="fas fa-user-plus"></i> Signup</button>
          </div>
          <div class="col-md-6 py-3" style="font-size: 25px">
            <button type="button" class="btn btn-sm btn-light" data-toggle="modal" data-target="#login-modal"><i
                class="fas fa-sign-in-alt"></i> Login</button>
          </div>
        </div>
      </div>
      <div class="col-md-2" v-if="isLoggedIn == true">
        <div class="row">
          <div class="col-md-6 py-3" style="font-size: 25px">
            <i class="fas fa-user-circle"></i>
          </div>
          <div class="col-md-6 py-3" style="font-size: 25px">
            <button class="btn btn-sm btn-light" v-on:click="logout">
              <i class="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})