import React from 'react';

function TodoItem({todo, funcChange}) {
    return (
        <li className='li'>
            <span>
                <input 
                type="checkbox" 
                className='checkbox' 
                onChange={() => funcChange(todo.id)}
                />
                <strong>{todo.id}) </strong>{todo.title}
            </span>
            <button className='btn'>&times;</button>
        </li>
    )
}
export default TodoItem