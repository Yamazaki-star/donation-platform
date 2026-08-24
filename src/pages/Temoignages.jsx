import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Temoignages = () => {
  const temoignages = [
    {
      id: 1,
      nom: 'Marie Leclerc',
      ville: 'Port-au-Prince, Haïti',
      image: '👩',
      role: 'Bénéficiaire - Éducation',
      texte: 'Grâce à DonAide, j\'ai pu envoyer mes trois enfants à l\'école. Ils rêvent maintenant de devenir médecin et ingénieur. Merci infiniment !',
      rating: 5
    },
    {
      id: 2,
      nom: 'Kofi Mensah',
      ville: 'Accra, Ghana',
      image: '👨',
      role: 'Bénéficiaire - Santé',
      texte: 'La clinique mobile a sauvé la vie de ma mère. Sans ce service, nous n\'aurions jamais eu accès aux soins médicaux. Vous êtes nos héros !',
      rating: 5
    },
    {
      id: 3,
      nom: 'Fatima Al-Rashid',
      ville: 'Caire, Égypte',
      image: '👩‍🦱',
      role: 'Bénéficiaire - Logement',
      texte: 'Le refuge nous a donné un nouveau départ. Ma famille a maintenant un endroit sûr où vivre. Vous avez changé nos destins.',
      rating: 5
    },
    {
      id: 4,
      nom: 'Carlos Rodriguez',
      ville: 'Lima, Pérou',
      image: '👨‍💼',
      role: 'Volontaire',
      texte: 'Travailler avec DonAide m\'a montré le vrai pouvoir de la solidarité. Chaque jour, je vois des lives transformées. C\'est extraordinaire !',
      rating: 5
    },
    {
      id: 5,
      nom: 'Aisha Okonkwo',
      ville: 'Lagos, Nigeria',
      image: '👱‍♀️',
      role: 'Bénéficiaire - Formation',
      texte: 'La formation en couture m\'a permis de lancer ma propre entreprise. J\'emploie maintenant 5 autres femmes de mon village. Merci DonAide !',
      rating: 5
    },
    {
      id: 6,
      nom: 'Dr. Roberto Silva',
      ville: 'São Paulo, Brésil',
      image: '👨‍⚕️',
      role: 'Partenaire Médical',
      texte: 'Collaborer avec DonAide nous permet d\'apporter des soins de qualité aux populations oubliées. Leur engagement est remarquable.',
      rating: 5
    },
    {
      id: 7,
      nom: 'Amara Diallo',
      ville: 'Dakar, Sénégal',
      image: '👧',
      role: 'Bénéficiaire - Éducation',
      texte: 'Avant, je rêvais de devenir avocate mais c\'était impossible. Aujourd\'hui je suis en lycée grâce à la bourse DonAide. Mon rêve devient réalité !',
      rating: 5
    },
    {
      id: 8,
      nom: 'Yuki Tanaka',
      ville: 'Tokyo, Japon',
      image: '👨‍🎓',
      role: 'Donateur',
      texte: 'Je suis ravi de soutenir DonAide. Leur transparence et impact réel m\'ont convaincu. C\'est vraiment un changement positive !',
      rating: 5
    }
  ]

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Témoignages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Écoutez les histoires inspirantes de ceux dont la vie a été transformée par nos projets
            et par la générosité de nos donateurs
          </p>
        </div>

        {/* Grille de Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {temoignages.map(temoignage => (
            <div
              key={temoignage.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow relative"
            >
              {/* Icône Citation */}
              <div className="absolute top-4 right-4 text-yellow-300 opacity-30">
                <FaQuoteLeft className="text-3xl" />
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{temoignage.image}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{temoignage.nom}</h3>
                  <p className="text-sm text-gray-600">{temoignage.role}</p>
                  <p className="text-xs text-gray-500">{temoignage.ville}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(temoignage.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Texte */}
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{temoignage.texte}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Votre Témoignage Compte</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Si vous avez bénéficié de nos projets ou si vous êtes un donateur satisfait,
            partagez votre histoire avec nous. Vos mots inspirent d'autres à agir.
          </p>
          <button className="bg-accent text-primary px-10 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            Partager Mon Témoignage
          </button>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-4xl font-bold text-primary mb-2">{temoignages.length}+</h4>
            <p className="text-gray-600 font-semibold">Histoires Inspirantes</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-4xl font-bold text-green-600 mb-2">4.9/5</h4>
            <p className="text-gray-600 font-semibold">Note Moyenne</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">1,500+</h4>
            <p className="text-gray-600 font-semibold">Vies Transformées</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temoignages