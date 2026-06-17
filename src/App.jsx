
import './App.css'
import { Header } from './Header'
import { Usercontext } from './Usercontext'

function App() {
  const user = {
    name : "sandy",
    role : "devolper",
    login : "10 o'clock"
  }

  return (
    <Usercontext value={user}>
    <>
    <h1>Dashboard</h1>
    <Header user={user} />
    </>
    </Usercontext>
  )
}

export default App
