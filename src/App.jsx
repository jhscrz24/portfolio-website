import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarMobile />
      <Main />
      <Footer />
    </>
  )
}

export default App
