import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import BlogDetail from "./pages/BlogDetail"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
