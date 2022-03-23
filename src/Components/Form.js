import React from 'react'


const Form = ({todos,setTodos,inputText,setInputText,setStatus}) => {

    function inputHandler(e){

        setInputText(e.target.value)  ; 

    }
    function addHandler(e){
        e.preventDefault();
        setTodos([...todos,{text:inputText ,completed:false,id:Math.random()*1000}]);
        console.log(todos);
        setInputText("")
    }

    function statsHndler(e){
     setStatus(e.target.value)
    }
  return (
    <div className='form'>


         <form action="">
         
         <input value={inputText} placeholder="Add your todos here" onChange={inputHandler} type="text" />
         
        
        <button onClick={addHandler} className='add' type='submit'>
           Add
        </button>

        <div className="select">
          <select onChange={statsHndler} name="todos" className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">UnCompleted</option>
          </select>
        </div>

        </form>
       
        
    </div>


  )
}

export default Form