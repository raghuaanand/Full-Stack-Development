import React, { memo, useState} from "react"

function App() {

  const [title, setTitle] = useState("Raghu");

  function handleTitle(){
    setTitle(Math.random());
  }
  return (
    <>
      <button onClick={handleTitle}>Click to change the title </button>
      <Header title={title}/>
      <Header  title="Anand"/>
      <Header  title="Anand"/>
      <Header  title="Anand"/>
    </>
  )
}

//  memo lets you skip re-rendering the components when its props are unchanged, that is what we were doing by pushing the state down in previous commit.


const Header = React.memo(function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}) 

export default App
