import './App.css'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import VideoGrid from './pages/VideoGrid'
import Footer from './components/Footer'

function App() {
 return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/videogrid" element={<VideoGrid/>} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
