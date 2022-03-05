import React from 'react';
import TodoList from './TodoList';

function App() {
  const items = [
    {title: "Van", id: 1, completed: false},
    {title: "Two", id: 2, completed: false},
    {title: "Free", id: 3, completed: false},
  ]
  
  function suckYou(id) {
    console.log(id)
  }

  return (
  <div className='wrapper'>
    <h1>Лист задач</h1>
    <TodoList 
    todos={items}
    fuckYou={suckYou}
    />
  </div>
  )}

export default App;

