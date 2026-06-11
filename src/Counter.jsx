import { useState } from "react"

export const Counter = ()=>{
const [count , setCount ]= useState(0);


const counting = ()=>{
    setCount ( count + 5 );
}

const Decrease = ()=>{
    setCount (count- 15);
}

return (
    <>
    <div>
    <button onClick={counting}>count  </button>
    <input type="Number" onChange={counting} value={count}/>
    <button onClick={Decrease}>Decrease</button>
    </div>

    </>
    
)
  
}