// ---------------------------------- START----------------------------------------//

import { useState } from "react";


/* import { useEffect, useState } from "react";
import axios from 'axios';

//  axios is another library that lets you hit http calls under the hood.

function App() {

  const [todos, setTodos] = useState([]);


  // it runs twice because we are using react strict mode in app.jsx , if we remove that strict mode it will run only once.

  // we can not use async before the main function, to achieve that we have 2 ways -> the ugly way is to declare the function outside with async and then use it in the useEffect -> and the other way is to use the asyncUseEffect library
  
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response){
        setTodos(response.data.todos)
      })
  }, []);

  return (
    <>
      {todos.map(({title, description}) => <Todo title={title} description={description} />)}
    </>
  )
}


function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App */


// ---------------------------------------------- ASSIGNMENT SOLUTION-------------------------------------------------------//

/* import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App(){

  const [selectedId, setSelectedId] = useState(1);
  return(
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>
      <button onClick={function(){
        setSelectedId(2);
      }}>2</button>
      <button onClick={function(){
        setSelectedId(3);
      }}>3</button>
      <button onClick={function(){
        setSelectedId(4);
      }}>4</button>
      <TODO id={selectedId} />
    </div>
  )
}

function TODO({id}){

  const [todo, setTodo] = useState({});

  // implement effect here

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        setTodo(response.data.todo)
      })
  }, [id])

  return(
    <div>
    ID:{id}
      <h1>
        {todo.title}
      </h1>
      <h5>
        {todo.description}
      </h5>
    </div>
  )
}


export default App; */


// ----------------------------------------------- useMemo ---------------------------------------------- //


function App() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);



  let sum = 0;
  for(let i = 0; i < inputValue; i++){
    sum += i;
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }} />
      <p>Sum is {sum} </p>

      <button onClick={() => {
        setCount(count + 1);
      }}>Counter {count}</button>
    </div>
  )
}

export default App;