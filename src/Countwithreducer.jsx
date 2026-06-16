import { useReducer } from "react";

const Countvalue = 0 ;

const reducer = (state , action)=>{
    switch(action){
    case "Increment":
     return   state + 1;
    case "Decrement":
    return   state - 1;
    case "Reset":
        return Countvalue;

    default :
    return state
}}

 export const Countwithusereducer = ()=>{

    const[state , dispatch ]=useReducer(reducer ,Countvalue);
    return(
        <div>
            <p> Count :{state}</p>
            <button onClick={()=>{dispatch("Increment")}}>Increment</button>
            <button onClick={()=>{
                dispatch("Decrement")
            }}>Decrement</button>
            <button onClick={()=>{
                dispatch("Reset")
            }}>Reset</button>
        </div>
    )
 }