import React from 'react';
import TodoItem from './TodoItem';
import "./index.css";


export default function TodoList(props) {
    return (
        <ul className='todoList'>
            {props.todos.map(element => {
                return <TodoItem todo={element} key={element.id} funcChange={props.fuckYou}/>
            })}
        </ul>
    )
}
