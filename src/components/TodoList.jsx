
import TodoItem from "./TodoItem";

const TodoList =({todos})=>{
    return(
        <div>
            {todos.map((todo)=>{
                return(
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    />
                );
            })}
        </div>
    );
};


export default TodoList;

