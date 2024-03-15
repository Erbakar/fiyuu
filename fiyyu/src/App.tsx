import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
