
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, addTodo, deleteTodo, changeTodoStatus } from './database/Todos';

export const TodoContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [todos, setTodos] = useState(getTodos() || []);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleStatus = (id) => {
    setTodos(changeTodoStatus(id));
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(id));
  };

  const handleAdd = (text) => {
    setTodos(addTodo(text));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleRegister = (user) => {
    setLoggedInUser(user);
    setShowRegister(false);
    setShowLogin(true); 
  };

  return (
    <TodoContext.Provider value={{ handleAdd, handleStatus, handleDelete }}>
      <div>
        <Header
          loggedInUser={loggedInUser}
          onLogout={handleLogout}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />
        {!loggedInUser && !showLogin && !showRegister && (
          <Home />
        )}
        {showLogin && (
          <Login onLogin={handleLogin} />
        )}
        {showRegister && (
          <Register onRegister={handleRegister} />
        )}
        {loggedInUser && (
          <div className="h-screen flex items-center justify-center">
            <div className="card border-double border-4 border-cyan-400 shadow-2xl">
              <div className="card-body">
                <h1 className="text-3xl mb-4 text-center font-bold">Todo List App</h1>
                <TodoForm />
                <div className="collapse bg-base-200">
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title bg-cyan-400 peer-checked:bg-cyan-400 peer-checked:text-secondary-content">
                    Click to Check Your List
                  </div>
                  <div className="collapse-content bg-cyan-100 text-cyan-900 peer-checked:bg-cyan-100 peer-checked:text-cyan-900">
                    <TodoList todos={todos} />
                  </div>
                </div>
              </div>
            </div>

            <h1 className='text-3xl mb-4 text-center font-bold text-3xl'>Todo List App</h1>
            <TodoForm />
            
            <TodoList todos={todos}/>

          </div>
        )}
        <Footer />
      </div>
    </TodoContext.Provider>
  );
};

export default App;

