import { Link } from 'react-router-dom'
import { FaHeart, FaUsers, FaGlobe, FaShieldAlt } from 'react-icons/fa'

const Accueil = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ensemble pour un Monde Meilleur
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Aidez les populations défavorisées grâce à nos dons sécurisés et transparents
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/donation"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Donner Maintenant
            </Link>
            <Link
              to="/a-propos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-5xl font-bold text-primary mb-2">15,000+</div>
              <p className="text-gray-700 font-semibold">Bénéficiaires Aidés</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">€2.5M+</div>
              <p className="text-gray-700 font-semibold">Dons Collectés</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Projets en Cours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <FaHeart className="text-4xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solidarité</h3>
              <p className="text-gray-600">
                Nous croyons au partage et à l'entraide entre les communautés
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <FaShieldAlt className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparence</h3>
              <p className="text-gray-600">
                Tous les dons sont traçables et documentés avec précision
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-gray-600">
                Chaque don crée un changement réel dans la vie des gens
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <FaGlobe className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global</h3>
              <p className="text-gray-600">
                Nous opérons partout où il y a des besoins d'aide urgents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Faire la Différence ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Chaque don, peu importe le montant, change des vies. Rejoignez-nous dans cette mission.
          </p>
          <Link
            to="/donation"
            className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Contribuer à Notre Mission
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Accueil