import React, { useContext, useState } from 'react';
import { TodoContext } from '../App'; 

const TodoForm = () => {
  const [text, setText] = useState('');
  const { handleAdd } = useContext(TodoContext);

  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      // Display an error message if the input is empty
      alert('Please enter a todo');
      return;
    }
    handleAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputText}
        type="text"
        className="input input-bordered input-accent border-cyan-500 rounded-xl font-semibold"
        placeholder="Enter a ToDo"
        value={text}
      />
      <button type="submit" className="btn btn-outline btn-info ml-2 rounded-xl">Add</button>
    </form>
  );
};

export default TodoForm;
