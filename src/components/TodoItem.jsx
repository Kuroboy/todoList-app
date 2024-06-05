import React, { useContext } from 'react';
import { TodoContext } from '../App';


const TodoItem = ({ todo }) => {
  const { handleStatus, handleDelete } = useContext(TodoContext);

  return (
    <div className='flex justify-between'>
      <div className='hover:bg-green-500 border-solid border-2 border-gray-400 rounded-xl mt-2 text-xl font-semibold  text-center h-full w-3/4'>
      <p 
        onClick={() => {
          handleStatus(todo.id);
        }}
        className={`select-none ${todo.done ? 'bg-green-500 line-through rounded-xl ' : ''}`}>
        {todo.text}
      </p>
      </div>
      <p
        className='border-solid border-2 border-gray-400 rounded-full mt-2 text-xl font-semibold  text-center
        hover:bg-red-600 cursor-pointer select-none rounded-full '
        onClick={() => {
          handleDelete(todo.id);
        }}
      >✖</p>
    </div>
  );
};

export default TodoItem;
