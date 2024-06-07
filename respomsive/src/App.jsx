// import './App.css'
import Footer from './components/Footer'
import { Routes, Route } from'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Blog from './pages/Blog'
import Prices from './pages/Prices'
import Contact from './pages/Contact'

function App() {

  return (
 <>
 <Navigation />
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/pricing" element={<Prices />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
 <Footer />
 </>
  )
}

export default App
