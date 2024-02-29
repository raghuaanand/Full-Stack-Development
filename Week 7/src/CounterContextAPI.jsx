import React, { useContext, useState } from 'react'
import { CountContext } from './context';

const CounterContextAPI = () => {

    const [count, setCount] = useState(0);

    // wrap anyone who wants to use the teleported value inside a provider

    return (
        <div>
            <CountContext.Provider value={{count, setCount}}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    )
}


function Count({ setCount }) {

    return (
        <div>
            <CountRenderer/>
            <Buttons setCount={setCount}/>
        </div>
    )
}

function CountRenderer(){

    const count = useContext(CountContext);

    return(
        <div>
            {count}
        </div>
    )
}


function Buttons({ setCount}) {

    const {count, setCount} = useContext(CountContext);
    return (
        <div>
            <button onClick={() => {
                setCount(count - 1);
            }}>
                Decrease
            </button>
            <button onClick={() => {
                setCount(count  + 1);
            }}>
                Increase
            </button>
        </div>
    )
}

export default CounterContextAPI;
