import { useContext } from "react";
import { Usercontext } from "./Usercontext";


export const Avatar = ()=>{
    const san =useContext(Usercontext)
    return(
        <p>Welcome , {san.name} login @{san.login}</p>
    );
        
    
};