import { Actionbutton } from "./Actionbutton"

export const Contact =()=>{

    const handel = ()=>{
        alert (" Sending meassage")
        
    };
return (
<div>
    <h2>Countact us</h2>
    <Actionbutton text = "send message"  onClick ={handel} />
</div>
)
}