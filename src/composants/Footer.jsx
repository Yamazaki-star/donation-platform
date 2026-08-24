import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* À Propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaHeart className="text-accent" />
              DonAide
            </h3>
            <p className="text-gray-400 text-sm">
              Plateforme solidaire pour soutenir les populations défavorisées à travers des dons sécurisés et transparents.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-accent transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="hover:text-accent transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              📧 contact@donaide.com
            </p>
            <p className="text-gray-400 text-sm mb-2">
              📞 +33 1 23 45 67 89
            </p>
            <p className="text-gray-400 text-sm">
              📍 Paris, France
            </p>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nous Suivre</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <hr className="border-gray-700 mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} DonAide. Tous droits réservés. | Plateforme de Donation Solidaire
          </p>
          <p className="mt-2">
            Fait avec <FaHeart className="inline text-accent" /> pour les populations défavorisées
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer