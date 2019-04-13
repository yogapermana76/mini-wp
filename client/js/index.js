const url = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    articles: [],
    title: '',
    content: '',
    image: '',
    search: '',
    name: '',
    email: '',
    password: '',
    isLoggedIn: false,
    isPositon: '',
    text: ''
  },
  created() {
    this.getAllArticle()
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true
    }
  },
  methods: {
    getAllArticle() {
      axios
      .get(`${url}/articles`)
      .then(({ data }) => {
        this.articles = data
      })
      .catch(err => {
        console.log(err)
      })
    },
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      const id_token = googleUser.getAuthResponse().id_token;

      axios
        .post(`${url}/users/login/google`, {
          id_token
        })
          .then(user => {
            localStorage.setItem('token', user.token)
            localStorage.setItem('id', user.id)
            localStorage.setItem('login', 'google')
          })
          .catch(err => {
            console.log('request failed' , err.message)
          })
    },
    signOut() {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        localStorage.clear()
      });
      this.isLoggedIn = false
    },
    addArticle() {
      axios
        .post(`${url}/articles`, {
          title: this.title,
          content: this.text,
          image: this.image
        })
          .then(({ data }) => {
            this.articles.push(data)
            this.title = ''
            this.content = ''
            this.image = ''
          })
          .catch(err => {
            console.log(err)
          })
    },
    deleteArticle(id) {
      axios
        .delete(`${url}/articles/${id}`)
          .then(() => {
            this.getAllArticle()
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateArticle(id) {
      axios
        .put(`${url}/articles/${id}`, {})
          .then(() => {
            console.log('successfull updated')
          })
          .catch(err => {
            console.log(err.message)
          })
    },
  },
  computed: {
    filterArticles() {
      return this.articles.filter(article => {
        return article.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  components: {
    wysiwyg: vueWysiwyg.default.component,
  }
})