import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // wrong way of getting todos from the backend using setTodos
  // correct way is using useEffect hook

  fetch('http://localhost:3000/todos')
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div className='flex justify-center gap-40 items-center h-screen w-screen'>
      <CreateTodo />
      <Todos todos = {todos}/>
    </div> 
  )
}

export default App
