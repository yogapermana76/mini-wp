const url = 'http://localhost:3000'

new Vue({
  el: '#main',
  data: {
    articles: [],
    title: '',
    content: '',
    image: '',
    search: '',
    name: '',
    email: '',
    password: ''
  },
  created() {
    axios
      .get(`${url}/articles`)
      .then(({ data }) => {
        this.articles = data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    register() {
      axios
        .post(`${url}/users`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
          .then(user => {
            console.log('successfull register')
          })
          .catch(err => {
            console.log(err.message)
          })
    },
    login() {
      axios
        .post(`${url}/users`, {
          email: this.email,
          password: this.password
        })
          .then(() => {
            console.log('success login')
          })
          .catch(err => {
            console.log(err.message)
          })
    },
    addArticle() {
      axios
        .post(`${url}/articles`, {
          title: this.title,
          content: this.content,
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
            console.log('successfull deleted article')
            return axios
              .get(`${url}/articles`)
          })
          .then(({ data }) => {
            this.articles = data
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