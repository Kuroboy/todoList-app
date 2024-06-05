import { createContext, useState } from 'react';
import { getTodos, addTodo, deleteTodo, changeTodoStatus } from './database/Todos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export const TodoContext = createContext();

const App = () => {
  const [todos, setTodos] = useState(getTodos());

  const handleStatus = (id) => {
    setTodos(changeTodoStatus(id));
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(id));
  };

  const handleAdd = (text) => {
    setTodos(addTodo(text));
  };

  return (
    <TodoContext.Provider value={{ handleStatus, handleDelete, handleAdd }}>
      <div className='flex items-center justify-center h-screen'>
        <div className='card border-double border-4 border-cyan-400 shadow-2xl'>
          <div className='card-body'>
            <h1 className='text-3xl mb-4 text-center font-bold '>Todo List App</h1>
            <TodoForm />
            
            <div className="collapse bg-base-200">
              <input type="checkbox" className="peer" /> 
              <div className="collapse-title bg-cyan-400  peer-checked:bg-cyan-400 peer-checked:text-secondary-content">
                Click to Check Your List
              </div>
              <div className="collapse-content bg-cyan-100 text-cyan-900 peer-checked:bg-cyan-100 peer-checked:text-cyan-900"> 
                <TodoList todos={todos}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;