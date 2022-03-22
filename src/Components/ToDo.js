import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ToDo = ({todo,todos,setTodos}) => {
  const [done,setDone]=useState(false);
  


  function handleChange(){
    
    setTodos(todos.map((element)=>{
     if(element.id===todo.id){
        return{
          ...element,
          completed:!element.completed
        };
     }
     return element;
     
    }));

  }
  function handleClick(){
    setTodos(todos.filter(elemnt=>elemnt.id!=todo.id));
  }
  return (
    <div className='todo-item'>

    <div className='mushkila'>
        <input onChange={handleChange} className='checkmark' type="checkbox" />
        <li className={`${todo.completed?"done":""}`}>{todo.text}</li>
    </div>
        
        
        
        <button onClick={handleClick} className='trash'><DeleteIcon /></button>
        

    </div>
  )
}

export default ToDo