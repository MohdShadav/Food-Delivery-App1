import React from 'react'
import Header from '../Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header />
    <div>{children}</div>
    {/* {<footer />} */}
    <Footer />
    </>
  )
}

export default Layout