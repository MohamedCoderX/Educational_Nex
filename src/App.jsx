import React from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'
import  Carousel  from './Components/Carousel'
import Online from './Components/Online'
import Know from './Components/Know'

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Online/>
    <Carousel/>
    <Know/>
    </div>
  )
}

export default App