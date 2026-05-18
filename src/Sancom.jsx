// import propsty from 'prop-types'

function Sancom(props){
    if(props.show == true){
        return(
        
        <div className="card">

        <h2>Welcome to the SANCOM</h2>
        <p>{props.name}</p>
        <span>{props.price}</span>
        <h3>{props.rating}</h3>
       
        
        </div>
    );
    }

    else{
        return(
        <div className="card"><p>Not Aavaliable</p></div>
        )

    }

}

// Sancom.propsty = {
//     name : propsty.string,
//     price : propsty.number,
//     rating :propsty.bool
// }

export default Sancom;