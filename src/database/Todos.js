let todos = [];
  
  const getTodos = () => {
    return todos;
  }
  
  const changeTodoStatus = (todoId) => {
    todos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done }; 
      }
      return todo;
    });

    return todos
  };
  
  const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);

    return todos
  };
  
  const addTodo = (text) => {
    todos = [...todos, { id: todos.length + 1, text, done: false }];

    return todos
  };
  
  export { getTodos, changeTodoStatus, deleteTodo, addTodo };
  