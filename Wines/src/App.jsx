
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Wines from './pages/Wines'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './layouts/Footer'
import Wishlist from './pages/Wishlist'

function App() {
  

  return (<>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/wines' element={<Wines/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
