import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
// import Navbar from './Navbar'
import { CartProvider } from 'react-use-cart'

const Layout = ({children}) => {
  return (
   <>
   <CartProvider>


    <Navbar/>
    {/* <Navbar/> */}
    <main>
        {children}
    </main>
    <Footer/>
   </CartProvider>
   
   </>
  )
}

export default Layout