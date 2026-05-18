import './App.css'
import Footer from './Footer'
import Sancom from './Sancom'


function App() {
  

  return (
    <>
      
      <Sancom name="sand" price={50} rating={5}show={true}  />
      <Sancom name="sand2" price={500} rating={3} show = {true} />
      <Sancom name="sand3" price={5000} rating={4} show = {true}/>

    </>
  )
}

export default App;
