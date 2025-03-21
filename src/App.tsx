import WhatsAppButton from './Components/WhatsAppButton'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AllProducts from './Pages/AllProducts';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
     <Router>
     <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
      <Footer/>
    </Router>
    <WhatsAppButton/>
    </>
  )
}

export default App
