import React, {Fragment, useState} from "react"

function App() {
  const [name, setName] = useState('Raghu');

  function handleNameChange(){
    setName (Math.random());
  }
  return (
    // we can do <React.Fragment> </React.Fragment> instead of just <></> both does the same thing it does not insert an extra div 
    <Fragment>
      <button onClick={handleNameChange}>Click me to change the name</button>  
      <Header title = {name}/>
      <Header  title="Anand"/>
    </Fragment>
  )
}

//  the fucntion below can also destructure the object this way

/* 

function Header(props){
  return (
    <div>
      {props.title}
    </div>
  )
}

 */

function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}

export default App
