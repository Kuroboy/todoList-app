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
    </form>
  );
};

export default TodoForm;
