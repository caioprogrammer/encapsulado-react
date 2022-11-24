import './scss/index.scss'
import { About } from './components/About/About'
import { Benefits } from './components/Benefits/Benefits'
// import { Faq } from './components/Faq/Faq'
import Hero from './components/Hero/Hero'
import { Garantee } from './components/Garantee/Garantee'
import { BenefitsBuy } from './components/Benefits/BenefitsBuy'
import { Nothing } from './components/Nothing/Nothing'
import Showcase from './components/Showcase/Showcase'

function App() {
  return (
    <div className="App">
      <Hero />
      <Benefits />
      <About />
      {/* <Faq /> */}
      <Garantee />
      <Showcase />
      <BenefitsBuy />
      <Nothing />
    </div>
  )
}

export default App
