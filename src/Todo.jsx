import { useState } from "react";

export const Todo = ()=>{
    const [items , setItems]= useState([
        {
            id : 1,
            Task : "Task one"
        },
        {
            id : 2,
            Task : "Task two"
        }
    ]);

    const additem = ()=>{
        const newitem = {
             id : Date.now() ,
             Task : "Task three" ,
        };
        // setItems([...items ,newitem])
        setItems(items.concat(newitem));

       
    }
     const Deleteitem = (id)=>{
        setItems(items.filter((item)=>{
            item.id !== id
        }));

        
    }
    
    return (
        <div>
            <ul>
                {items.map((item)=>{
                  return(
                   <li key={item.id}>
                      {item.Task}
                     <button onClick={()=>{Deleteitem(item.id)}}>Delete</button>

                   </li>
                  )
                })}
            </ul>
             <button onClick={additem}>AddItems</button>
        </div>
    );
}