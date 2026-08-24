import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Donation', path: '/donation' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'À Propos', path: '/a-propos' },
  ]

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <FaHeart className="text-accent" />
            DonAide
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton Donner */}
          <Link
            to="/donation"
            className="hidden md:block bg-accent text-primary px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Donner Maintenant
          </Link>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donation"
              className="block mt-4 bg-accent text-primary px-4 py-2 rounded-lg font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Donner Maintenant
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar