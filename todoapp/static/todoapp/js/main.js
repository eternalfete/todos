var app = new Vue({
  el: '#app',
  data: {
    todos: []
  },
  methods: {
    getData: function() {
      console.log('bb');
      axios.get('http://localhost:8000/api/todos/')
        .then(function(response) {
          console.log(response);
          this.todos = response.data;
          console.log(this.todos);
        }).catch(function() {
          console.log('aa');  
        });
      }
    },
    created() {
      console.log('created');
      // this.getData();
    },
    mounted() {
      console.log('mounted');
      axios.get('http://localhost:8000/api/todos/')
        .then(function(response) {
          console.log(response);
          this.todos = response.data;
          console.log(this.todos);
        }).catch(function() {
          console.log('aa');  
        });
      // this.getData();
      console.log('mounted todos:'+this.todos);
    },
    updated() {
      console.log('updated');
      console.log('updated todos:', this.todos);
    }
})

// var app = new Vue({
//   el: '#app',
//   data () {
//     return {
//       todos: null,
//       loading: true,
//       errored: false
//     }
//   },
//   filters: {
//     currencydecimal (value) {
//       return value.toFixed(2)
//     }
//   },
//   mounted () {
//     axios
//       .get('http://localhost:8000/api/todos/')
//       .then(response => {
//         this.todos = response.data
//         console.log(this.todos);
//       })
//       .catch(error => {
//         console.log(error)
//         this.errored = true
//       })
//       .finally(() => this.loading = false)
//   }
// })