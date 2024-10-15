import { useAtom } from 'jotai'
import './App.css'
import { cartAtom, productAtom } from './Atoms'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  const [cart] = useAtom(cartAtom)
  return (
    <>
      Cart : {cart.length}
      <Link to={"/"} > Home </Link>
      <Link to={"/cart"} > Cart </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
