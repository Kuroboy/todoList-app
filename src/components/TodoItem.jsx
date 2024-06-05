import React, { useContext } from 'react';
import { TodoContext } from '../App';


const TodoItem = ({ todo }) => {
  const { handleStatus, handleDelete } = useContext(TodoContext);

  return (
    
    <div className='flex justify-between'>
      <div className={`flex  w-3/4 rounded-xl items-center  border-solid border-2 border-gray-400 p-2 my-2 
      ${todo.done ? 'bg-green-400 border-green-300' : ''}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => handleStatus(todo.id)}
        className="mr-2 ml-2 checkbox checkbox-success"
      />
      <span 
        className={`font-medium text-lg uppercase select-none ${todo.done ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      </div>
      <button
        className=' btn btn-circle btn-outline mt-2 mr-2
        hover:bg-red-500 cursor-pointer rounded-full'
        
        onClick={() => {
          handleDelete(todo.id);
        }}
      >✖</button>

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

