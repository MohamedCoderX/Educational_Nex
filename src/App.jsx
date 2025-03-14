import React from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'
import  Carousel  from './Components/Carousel'
import Online from './Components/Online'
import Know from './Components/Know'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import About from './Components/About'
import Service from './Components/Service'

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Online/>
    <Carousel/>
    <Know/>
    <Service/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default App