import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import Partner from "./pages/Partner"
import Contact from "./pages/Contact"
import Kurye from "./pages/Kurye"
import Kvk from "./pages/Kvk"


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/partner" element={<Partner />} />
        <Route index path="/career" element={<Kurye />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/kisisel-verilerin-korunumu" element={<Kvk />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug/:index" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
