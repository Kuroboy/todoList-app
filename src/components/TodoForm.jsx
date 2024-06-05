import React, { useContext, useState } from 'react';

import { TodoContext } from '../App';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { handleAdd } = useContext(TodoContext);

  const handleInputText = (e) => {
    setText(e.target.value);
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Please enter a todo.'); 
      return;
    }
    handleAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        onChange={handleInputText}
        type="text"
        className="input input-bordered input-accent border-cyan-500 rounded-xl font-semibold flex-1 mr-2"
        placeholder="Enter a ToDo"
        value={text}
      />
      <button type="submit" className="btn btn-outline btn-info rounded-xl">
        Add
      </button>
      {error && <p className="text-red-500 ml-2">{error}</p>} 
=======
import { TodoContext } from '../App'; 

const TodoForm = () => {
  const [text, setText] = useState('');
  const {handleAdd} = useContext(TodoContext);

  const handleInputText = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAdd(text);
      setText('');
    }}>

      <input
        onChange={handleInputText}
        type="text"
        className='border-solid border-2 border-gray-400 p-2 rounded-xl'
        placeholder="Enter a ToDo"
        value={text}
      >
      </input>
      <button type="submit" className="bg-blue-400 text-white p-2 rounded-xl ml-2">Add</button>

    </form>
  );
};

export default TodoForm;
