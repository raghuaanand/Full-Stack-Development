import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);



  //  puts some condition when backend will be hit using fetch, empty dependency array means it will hit backend at the start only.
  useEffect(() => {

    setInterval(() => {

      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000)
    
  }, [])

  //  dependecy array takes state variable as input and any time that state variable changes, this code re runs.

  return (
    <div>
      {todos.map(({title, description}) => <Todo title={title} description={description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h5>
      {description}
    </h5>
  </div>
}


export default App;