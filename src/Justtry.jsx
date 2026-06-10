import { useState } from "react";

export const Justtry = ()=>{
    const [count,setCount] = useState(0)

   console.log(`Count ${count}`);

   const handelclick = ()=>{
    setCount(count+1);
   };

   return (
    <button onClick={handelclick}>COUNT : ${count}</button>
   );
};

