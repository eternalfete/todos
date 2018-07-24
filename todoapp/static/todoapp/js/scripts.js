var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:8000/api/todos', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    var todolist = document.getElementById('todoList');
    
    data.forEach(todo => {
      var li = document.createElement("li");

      li.appendChild(document.createTextNode(todo.title));
      todolist.appendChild(li);
    });
  } else {
    console.log('error');
  }
}

request.send();

var addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', function() {
  var postRequest = new XMLHttpRequest();
  var title = document.getElementById('todoTitle');
  var formData = new FormData();  

  formData.append('title', title.value);
  postRequest.open('POST', 'http://localhost:8000/api/todos/', true);
  postRequest.onload = function () {
    if (postRequest.status >= 200 && postRequest.status < 400) {
      var todolist = document.getElementById('todoList');
      var li = document.createElement("li");

      li.appendChild(document.createTextNode(title.value));
      todolist.appendChild(li);

      title.value = '';
    }  
  }

  postRequest.send(formData); 
})