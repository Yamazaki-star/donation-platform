import { FaHeartBroken, FaHome, FaBook, FaHospital } from 'react-icons/fa'

const APropos = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">À Propos de DonAide</h1>
          <p className="text-xl text-gray-200">
            Une plateforme solidaire pour transformer les vies
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Notre Histoire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                DonAide a été fondée en 2020 par un groupe d'entrepreneurs sociaux passionnés
                par l'aide aux populations défavorisées. Nous avons constaté qu'il existait une
                réelle barrière entre ceux qui veulent donner et ceux qui ont besoin d'aide.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Notre mission est simple : créer une plateforme transparente, sécurisée et
                accessible où chacun peut contribuer à l'amélioration de la vie des autres,
                où qu'il soit dans le monde.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Aujourd'hui, nous sommes fiers d'avoir aidé plus de 15 000 personnes à travers
                50+ projets communautaires en Afrique, Asie et Amérique Latine.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">2020</h3>
                  <p>Création de DonAide</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2021</h3>
                  <p>Intégration des paiements PayPal</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2022</h3>
                  <p>Ajout des paiements en Crypto-monnaies</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2023</h3>
                  <p>Expansion internationale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos Domaines d'Intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHeartBroken className="text-5xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Santé</h3>
              <p className="text-gray-600">
                Accès aux soins médicaux et aux médicaments essentiels
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaBook className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Éducation</h3>
              <p className="text-gray-600">
                Scolarisation et formation professionnelle
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHome className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Logement</h3>
              <p className="text-gray-600">
                Construction de refuges et amélioration du logement
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHospital className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Urgence</h3>
              <p className="text-gray-600">
                Aide d'urgence en cas de catastrophe naturelle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nom: "Sophie Martin",
                poste: "Fondatrice & PDG",
                bio: "Experte en développement social avec 15 ans d'expérience"
              },
              {
                nom: "Jean Dupont",
                poste: "Directeur Technique",
                bio: "Ingénieur blockchain et expert en fintech"
              },
              {
                nom: "Marie Leclerc",
                poste: "Directrice Partenariats",
                bio: "Relationniste internationale avec un réseau global"
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{member.nom}</h3>
                <p className="text-primary font-semibold mb-2">{member.poste}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default APropos