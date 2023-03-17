import React from 'react'
import "./app.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Populer from './Components/Populer/Populer';
import Offers from './Components/Offers/Offers';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Populer />
    <Offers />
    <Blog />
    <About />
    <Footer />
    </>
  )
}

export default App