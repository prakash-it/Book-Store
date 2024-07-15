import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllBook from './pages/AllBook'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route  path='/all-books' element={ <AllBook/>}/>
      <Route  path='/cart' element={<Cart/> }/>
      <Route  path='/profile' element={<Profile/> }/>
      <Route  path='/login' element={ <Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </Router>
    

    
     
    </>
  )
}

export default App
