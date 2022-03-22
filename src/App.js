import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDos from './Components/ToDos';

function App() {


  const[inputText,setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  const[status,setStatus]=useState("all");
  const[filter,setFilter]=useState([]);


  useEffect(
    ()=>{
      getLocalTodos();
    }
    ,[])

  

  useEffect(
    ()=>{
      switch(status){
        case 'completed':
          setFilter(todos.filter((todo)=>todo.completed===true))
          break
        case 'uncompleted':
          setFilter(todos.filter((todo)=>todo.completed===false))
          break
          default:
          setFilter(todos)
          break;
      }
      saveLocalTodos();
    }
    
    
    ,[todos,status])


    const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    }
    const getLocalTodos=()=>{
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]));
      }else{
        let todoLocal=JSON.parse(localStorage.getItem("todos"))
        setTodos(todoLocal )
      }

    }

  

  
  
  return (
    <div className="App">
    <h1 >Kawan's Todo List</h1>
     <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
     <ToDos filter={filter} todos={todos} setTodos={setTodos} />
     
    </div>
  );
}

export default App;
