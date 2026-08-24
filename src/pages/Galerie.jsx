import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Galerie = () => {
  const [filtreCategorie, setFiltreCategorie] = useState('tous')

  const categories = ['tous', 'education', 'sante', 'logement', 'urgence']

  const projets = [
    {
      id: 1,
      titre: 'École pour Enfants Démunis',
      categorie: 'education',
      description: 'Construction d\'une école primaire en Haïti',
      image: '🏫',
      date: 'Juin 2023',
      impact: '250 enfants scolarisés'
    },
    {
      id: 2,
      titre: 'Clinique Mobile de Santé',
      categorie: 'sante',
      description: 'Clinique mobile pour villages reculés',
      image: '🏥',
      date: 'Avril 2023',
      impact: '1500+ personnes consultées'
    },
    {
      id: 3,
      titre: 'Refuge d\'Urgence',
      categorie: 'logement',
      description: 'Refuge pour familles sans abri',
      image: '🏠',
      date: 'Mars 2023',
      impact: '80 familles aidées'
    },
    {
      id: 4,
      titre: 'Aide d\'Urgence Tremblements de Terre',
      categorie: 'urgence',
      description: 'Distribution d\'aide alimentaire et médicale',
      image: '🚨',
      date: 'Février 2023',
      impact: '5000+ personnes secourues'
    },
    {
      id: 5,
      titre: 'Programme de Bourses Universitaires',
      categorie: 'education',
      description: 'Bourses pour étudiants en difficulté',
      image: '📚',
      date: 'Janvier 2023',
      impact: '50 étudiants soutenus'
    },
    {
      id: 6,
      titre: 'Campagne Vaccination Enfants',
      categorie: 'sante',
      description: 'Vaccination gratuite pour enfants vulnérables',
      image: '💉',
      date: 'Décembre 2022',
      impact: '800 enfants vaccinés'
    },
    {
      id: 7,
      titre: 'Eau Potable pour Village',
      categorie: 'urgence',
      description: 'Installation de puits d\'eau potable',
      image: '💧',
      date: 'Novembre 2022',
      impact: '2000+ personnes ont accès à l\'eau'
    },
    {
      id: 8,
      titre: 'Formation Professionnelle Femmes',
      categorie: 'education',
      description: 'Formation en couture et artisanat',
      image: '👩‍🏫',
      date: 'Octobre 2022',
      impact: '120 femmes formées'
    }
  ]

  const projetsFiltres = filtreCategorie === 'tous'
    ? projets
    : projets.filter(p => p.categorie === filtreCategorie)

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Galerie de Nos Projets</h1>
          <p className="text-xl text-gray-600">
            Découvrez l'impact réel de vos dons à travers nos projets communautaires
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltreCategorie(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                filtreCategorie === cat
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-primary'
              }`}
            >
              {cat === 'tous' ? 'Tous les Projets' : cat}
            </button>
          ))}
        </div>

        {/* Grille de Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projetsFiltres.map(projet => (
            <div
              key={projet.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                <span className="text-7xl">{projet.image}</span>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-accent uppercase bg-yellow-100 px-3 py-1 rounded-full">
                    {projet.categorie}
                  </span>
                  <span className="text-xs text-gray-500">{projet.date}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                  {projet.titre}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {projet.description}
                </p>

                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary">
                    📊 Impact
                  </p>
                  <p className="text-xs text-gray-700 mt-1">
                    {projet.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message vide */}
        {projetsFiltres.length === 0 && (
          <div className="text-center py-12">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              Aucun projet trouvé pour cette catégorie
            </p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-16 pt-12 border-t-2 border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">{projetsFiltres.length}</h4>
              <p className="text-gray-600">Projets Actifs</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-green-600 mb-2">15,000+</h4>
              <p className="text-gray-600">Bénéficiaires Touchés</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-600 mb-2">4</h4>
              <p className="text-gray-600">Continents Couverts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galerie