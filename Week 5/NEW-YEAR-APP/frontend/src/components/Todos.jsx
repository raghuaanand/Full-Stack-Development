import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
      {todos.map( (todo) => {
        return <div className='flex justify-between gap-10 mt-10'>
          <div>
            <h1 className='font-extrabold text-2xl'> {todo.title} </h1>
            <h2 className='font-medium text-gray-400 ml-4'> {todo.description} </h2>
          </div>
            <button className='bg-blue-500 text-white rounded-lg px-10 my-2'> {todo.completed == true ? "completed" :"Mark as Complete"} </button>
        </div>
      })}
    </div>
  )
}

export default Todos
