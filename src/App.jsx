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
            <h1 className='text-3xl mb-4 text-center font-bold text-3xl'>Todo List App</h1>
            <TodoForm />
            
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
