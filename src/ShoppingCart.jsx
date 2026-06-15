import { useState } from "react";

export const ShoppingCart = ()=>{
   const [cartitems , setCartitems ] = useState(
    {
        Javascript : 0 ,
        ReactCourse :0,
    }
   );

   const price = {
    Javascript : 10,
    ReactCourse : 20 
   };

   const handeladdJS = ()=>{
    setCartitems ({
        ...cartitems ,
        Javascript : cartitems.Javascript + 1
    })
   }

   const handeladdReact = ()=>{
     setCartitems({
        ...cartitems,
        ReactCourse : cartitems.ReactCourse + 1
     })
   }

   const clearcart =()=>  {
   setCartitems({
    Javascript : 0 ,
    ReactCourse : 0
   })
   }


   return(
    <div>
        <h2>Shopping cart Items</h2>
        <Products
        Course= "Javascript "
        price = {price.Javascript}
        Quantity={cartitems.Javascript}
        Addprodut = {handeladdJS}/>

        <Products
        Course= " Reactcourse "
        price = {price.ReactCourse}
        Quantity={cartitems.ReactCourse}
        Addprodut = {handeladdReact}/> 

        <Cardsummry
        cartitems={cartitems}
        price={price}/>
        <button onClick={clearcart}>Clearcart</button>
       
    </div>
   )
}

export const Products = ({Quantity ,Course ,price ,Addprodut}) =>{
  return(
    <div>
        <h1>{Course}</h1>
        <p>{Quantity}</p>
        <p>{price}</p>
        <button onClick={Addprodut}>AddItems</button>
    </div>
  )
}

export const Cardsummry = ({cartitems , price})=>{
    const totalitems = cartitems.Javascript + cartitems.ReactCourse;

    const totalprice = 
         cartitems . Javascript * price .Javascript +
         cartitems .ReactCourse * price .ReactCourse;

    return(
        <div>
            <h1>Total Cart </h1>
            <p>Totalitems : {totalitems}</p>
            <p>Totalprice : {totalprice}</p>
            
        </div>
    )
}