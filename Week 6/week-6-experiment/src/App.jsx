import React, {Fragment, useState} from "react"

function App() {
  return (
    <Fragment>
    <HeaderWithButton />
      <Header  title="Anand"/>
    </Fragment>
  )
}

// now when we code like this whole components does not render, only the component with the useState hook renders.
//  this makes the application slightly more optimal.

function HeaderWithButton(){
  const [title, setTitle] = useState("Raghu");

  return(
    <div>
      <button onClick={() => {
        setTitle(Math.random());
      }}>Click to change the title </button>
      <Header title={title}/>
    </div>
    )
}



function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}

export default App
