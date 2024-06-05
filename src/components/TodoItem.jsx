import React, { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({todo})=>{
    const {handleStatus, handleDelete}= useContext(TodoContext); 

    return(
        <div className='flex justify-between border-solid border-2 border-gray-400'>
            <p
                onClick={()=>{
                    handleStatus(todo.id);
                }}  className='select-none'>{
                    todo.done
                    ? <><del>{todo.text}</del></>
                    : <>{todo.text}</>
                }
            </p>
            <span
                className='hover:text-red-400 cursor-pointer select-none'
                onClick={()=>{
                    handleDelete(todo.id);
                }}
                >✖</span>
        </div>
    )
}
export default TodoItem;
