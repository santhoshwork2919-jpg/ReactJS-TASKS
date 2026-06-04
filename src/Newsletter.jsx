import { Actionbutton } from "./Actionbutton"

export const Newsletter = ()=>{
    const better =()=>{
        alert ("Thank you for your sub")
    };

    return (
        <div>
            <h2>Subscribe to newsletter</h2>
            <Actionbutton text = "Subscribe" onClick={better} />
        </div>
    );
};