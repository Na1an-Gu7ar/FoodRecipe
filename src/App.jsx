import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './Routes/Home/index'
import Favourites from './Routes/Favourites/index'
import Details from './Routes/Details/index'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
