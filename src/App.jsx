import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './components/Footer'
import './index.css'
import { Toaster } from "react-hot-toast";
import ScrollUp from './components/ScrollUp'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <NavbarMobile />
      <Main />
      <Footer />
      <ScrollUp />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
