import { useState } from "react";

export const Login =()=>{
   const [islogin , setIslogin]= useState(false)
   const [message , setMessage]=useState("")

   const handelclick =()=>{
    setIslogin(!islogin);
   }

   const handelchange = (event)=> {
    setMessage(event.target.value);
   }

   return(
    <>
    <button onClick={handelclick}>{islogin ? "login" : "logout"}</button>
    <div>
    <input
     placeholder="Write some"
     type="text"
     value={message}
     onChange={handelchange}/>
     
    </div>
    <div>
        <p>{message}</p>
    </div>
    </>
   )
}