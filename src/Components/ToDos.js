import React from 'react'
import ToDo from './ToDo'


const ToDos = ({todos,setTodos,filter}) => {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
           {filter.map((todo,i)=>(
               <ToDo key={i} todos={todos} setTodos={setTodos} todo={todo} />
           ))}
        </ul>
    </div>
  )
}

export default ToDos