import React, { useState } from "react"
var counter = 3;
function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Go to gym',
      description: 'go to gym daily'
    },
    {
      id: 2,
      title: 'Go to gym',
      description: 'go to gym daily'
    },
    {
      id: 3,
      title: 'Go to gym',
      description: 'go to gym daily'
    }
  ]);

  function addTodo(){

    //  spread function
    setTodos([...todos, {
      id: counter++, 
      title: Math.random(),
      description : Math.random()
    }]);
  }
// keys while rendering helps react to know which was our first, second and so no element....
// whenever we are rendering the list or array, we need to give it a key property.
  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title = {todo.title} description = {todo.description}/>)}
    </>
  )
}



function Todo ({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App
