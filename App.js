import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hide, setHide]= useState(false)
  function updateAddress() {
    setHide(!hide)
  }
  const [list, setList]= useState([])
  const[userInput, setUserInput]= useState('')
  function addTolist(){
    const tempList=[...list]
    tempList.push(userInput)
    setList(tempList)
  }
  function updateInput(e){
    setUserInput(e.target.value)

  }
  function delitem(index){
    const tempList=[...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  

  return (
    <div className="App">
      <header className="App-header">
      
       
        <img src='https://images.unsplash.com/photo-1547699224-0924faf995c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZG93bmxvYWR8fDB8fHx8MTYxOTIwODA3NQ&ixlib=rb-1.2.1&q=80&w=1080' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {hide == false && (
          <p>saadaa</p>
          
       
        )}
        
       
        <button onClick={updateAddress}>hide</button>
        <input onChange={updateInput} placeholder='Add any item'/>
        <button onClick={addTolist}>Add</button>
        <ul>
        {list.map(function(item, index) {
  return <li>{item}
  <button onClick={()=>delitem(index)}>Delete</button>
  
  </li>
})}

        </ul>
      </header>
    </div>
  );
}

export default App;
