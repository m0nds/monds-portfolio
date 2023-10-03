import React from 'react'
import { Navbar } from './components'
import './App.scss'

import { About, Footer, Header, Skills, Work } from './container'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/> 
    </div>
  )
}

export default App