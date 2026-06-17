import {Theme} from "./Theme"


export const Header = ({user})=>{
    return(
        <header>
            <h2>Header</h2>
            <Theme user={user}/>
        </header>
    )
}