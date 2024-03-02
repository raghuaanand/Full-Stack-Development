import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  // anythings that uses count needs to be wrapped inside the RecoilRoot, We can do this directly in count component.
  return (
    <div>
      <RecoilRoot>
          <Count />  
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>   
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {!isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);     -> this used to rerender the button component
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
    <EvenCountRenderer />
  </div>
}

export default App
