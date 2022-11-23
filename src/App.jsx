import { useEffect } from 'react'
import { useState } from 'react'
import './scss/index.scss'
import { About } from './components/About/About'
import { Benefits } from './components/Benefits/Benefits'
import { Faq } from './components/Faq/Faq'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Hero />
      <Benefits />
      <About />
      {/* <Faq /> */}
    </div>
  )
}

export default App
