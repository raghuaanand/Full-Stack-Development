import { createContext } from "react";

// export const CountContext = createContext(0);


// this is done for more than one variable 
export const CountContext = createContext({
    count , setCount
});