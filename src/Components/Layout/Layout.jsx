import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home'
import Routers from '../../router/Routers'

const Layout = () => {
  return (
<>
<Header/>
<Routers/>
<Footer />
</>
  )
}

export default Layout;