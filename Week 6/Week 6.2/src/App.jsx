import { useEffect, useState } from "react";
import axios from 'axios';

//  axios is another library that lets you hit http calls under the hood.

function App() {

  const [todos, setTodos] = useState([]);


  // it runs twice because we are using react strict mode in app.jsx , if we remove that strict mode it will run only once.
  
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

export default App
