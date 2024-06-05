let todos =[
    {id: 1, text: 'Learn React', done: false},
    {id: 2, text: 'Learn JavaScript', done:false}
];

const getTodos =()=>{
    return todos;
}

const changeTodoStatus =(todoId)=>{
    todos = todos.map((todo)=>{
        if(todo.id === todoId){
            todo.done = !todo.done;
        }

        return todos;
    });
};

const deleteTodo = (id) =>{
    todos = todos.filter((todo)=> todo.id !==id)

    return todos;
}

const addTodo =(text)=>{
    todos = todos.concat({
        id: todos.length +1,
        text,
        done: false
    });
    return todos;
}

export {getTodos, changeTodoStatus, deleteTodo, addTodo};