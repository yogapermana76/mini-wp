Vue.component('search-wp', {
  props: ['searching', 'title', 'articles'],
  template: `
    <div class="card shadow">
      <nav class="navbar navbar-light bg-light">
        <input class="form-control mr-sm-2" type="search" v-model="searching" placeholder="Search"
          aria-label="Search">
      </nav>
    </div>
  `,
})