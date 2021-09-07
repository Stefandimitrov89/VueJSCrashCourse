const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return{
            firstName: 'Lego',
            lastName: 'Person',
            email: 'email@email.email',
            gender: 'lego',
            picture: 'https://randomuser.me/api/portraits/lego/0.jpg'
        }
    },
    methods: {
        async getUser() {
          const res = await fetch('https://randomuser.me/api')
          const { results } = await res.json()
          this.firstName = results[0].name.first
          this.lastName = results[0].name.last
          this.email = results[0].email
          this.gender = results[0].gender
          this.picture = results[0].picture.large
        },
    }
});

app.mount("#app");