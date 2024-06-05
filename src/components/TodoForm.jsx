import React, { useContext, useState } from 'react';
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
