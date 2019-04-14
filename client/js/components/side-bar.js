Vue.component('side-bar', {
  props: ['isLoggedIn'],
  template: `
    <div class="col-3 anyClass" v-if="isLoggedIn == true">

      <div class="row">
        <div class="col-md-12 py-2">
          <i class="fas fa-desktop"></i> View Site
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <i class="fas fa-signal"></i> Stats
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <i class="fas fa-history"></i> Activity
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-sync-alt"></i> Plan
        </div>
        <div class="col-md-5 py-2">
          <span class="float-right">Free</span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <b>Manages</b>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-sticky-note"></i> Site Pages
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">add</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="far fa-keyboard"></i> Blog Posts
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">add</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-image"></i> Media
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">add</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <i class="fas fa-comments"></i> Comments
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-retweet"></i> Feedback
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">add</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-plug"></i> Plugin
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">Manage</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <i class="fas fa-cloud-download-alt"></i> Import
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-2">
          <b>Personalize</b>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 py-2">
          <i class="fas fa-tools"></i> Customize
        </div>
        <div class="col-md-5 py-2">
          <div class="btn btn-sm btn-outline-dark float-right">Themes</div>
        </div>
      </div>

    </div>
  `
})