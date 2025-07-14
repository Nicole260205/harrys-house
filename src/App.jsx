import About from "./components/About"
import AlbumCarousel from "./components/AlbumCarousel"
import Hero from "./components/Hero"
import MVs from "./components/MVs"
import Navbar from "./components/Navbar"
import "@fontsource/poppins/300.css"
import Tour from "./components/Tour"
import Merch from "./components/Merch"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AlbumCarousel />
      <MVs />
      <Tour />
      <Merch />
      <Footer />
    </>
  )
}

export default App
