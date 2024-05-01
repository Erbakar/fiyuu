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
import Bilgilendirme from "./pages/Bilgilendirme"
import Aydinlatma from "./pages/Aydinlatma"
import Career from "./pages/Career"
import Sss from "./pages/Sss"


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/partner" element={<Partner />} />
        <Route index path="/career" element={<Career />} />
        <Route index path="/kurye" element={<Kurye />} />
        <Route index path="/sss" element={<Sss />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/kisisel-verilerin-korunumu" element={<Kvk />} />
        <Route index path="/bilgilendirme-metni" element={<Bilgilendirme />} />
        <Route index path="/aydinlatma-metni" element={<Aydinlatma />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug/:index" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
