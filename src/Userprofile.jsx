import { useState } from "react";

export const Userprofile = ()=>{
    const[user, setUser] = useState({
        name : "santhoshrithu" ,
        age  :23 ,
        address : "coimbatore"
    });

    const chnagename =()=>{
        setUser({
            ...user,
            name : "Rithanya"
        })
    }

    return (
        <div>
            <h2> {user.name}</h2>
            <p>AGE : {user.age}</p>
            <p>ADDRESS : {user.address}</p>
            <button onClick={chnagename}>Change name to rithanya</button>
            <button onClick={()=>{
                setUser({
                    ...user,
                    age : user.age+1
                })
            }}>Increase age by one</button>
        </div>
    )

}