import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './composants/Navbar'
import Footer from './composants/Footer'
import Accueil from './pages/Accueil'
import Donation from './pages/Donation'
import Galerie from './pages/Galerie'
import Temoignages from './pages/Temoignages'
import APropos from './pages/APropos'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/a-propos" element={<APropos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
