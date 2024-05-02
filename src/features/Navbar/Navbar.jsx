import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='border border-2 m-2 p-3 border-dark '>
         <Link to='/'>Home</Link> &nbsp; &nbsp;
         <Link to='countries'>Countries</Link>  &nbsp; &nbsp;
         <Link to='products'>Products</Link>  &nbsp; &nbsp;
    </div>
  )
}

export default Navbar
