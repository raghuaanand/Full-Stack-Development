import React, { useState } from 'react'

const PropDrilling = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <Count count={count} setCount={setCount} />

            {/*  but if someone says no no we want this button component inside the count component so we will have to pass count and setcount to Count components also even though it does not need it. */}

            {/* <Buttons count = {count} setCount = {setCount} /> */}
        </div>
    )
}


function Count({ count, setCount }) {

    //  just like what we did here, button components needed the setCount not the child component but to button component be able to use it I had to pass it though the Count component
    //  prop drilling has nothing to do with re rendering of the component, it will any how be re rendered. prop drilling basically is for unreadibility of the code.
    
    return (
        <div>
            {count}
            <Buttons count={count} setCount={setCount}/>
        </div>
    )
}


function Buttons({count, setCount}) {

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

export default PropDrilling;
