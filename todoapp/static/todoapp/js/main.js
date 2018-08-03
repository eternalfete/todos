"use strict";

var app = new Vue({
  el: '#app',
  data: {
    url: 'http://localhost:8000/api/todos/',
    todos: [],
    newTodoItem: ''
  },
  methods: {
    getData: function() {
      axios.get(this.url)
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    addTodo: function() {
      if (this.newTodoItem !== "") {
        axios.post(this.url, {
        'title': this.newTodoItem
        })
        .then(result => {
        this.todos.push(result.data);
        this.clearInput();
        })
        .catch(error => {
          console.log(error);
        });
      }      
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
    toggleComplete: function(todo, index) {
      var updatedData = {
        'id': todo.id,
        'title': todo.title,
        'complete': !todo.complete,
        'created': todo.created
      };
      axios.put(this.url + todo.id + '/', updatedData)
      .then(result => {
        todo.complete = !todo.complete;
      })
      .catch(error => {
        console.log(error);
      });
    },
    removeTodo: function(todo, index) {
      axios.delete(this.url + todo.id)
      .then(result => {
        this.todos.splice(index, 1);
      })
      .catch(error => {
        console.log(error);
      });      
    }
  },
  created: function() {
    this.getData();
  }
})