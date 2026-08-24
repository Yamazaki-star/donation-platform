import { useState } from 'react'
import { FaCreditCard, FaBitcoin, FaPaypal } from 'react-icons/fa'

const Donation = () => {
  const [montant, setMontant] = useState('')
  const [methodePaiement, setMethodePaiement] = useState('paypal')
  const [email, setEmail] = useState('')
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')

  const montantsPredefinis = [10, 25, 50, 100, 250, 500]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!montant || !email || !nom) {
      alert('Veuillez remplir tous les champs')
      return
    }

    if (methodePaiement === 'paypal') {
      // Simuler redirection PayPal
      alert(`Redirection vers PayPal pour un don de €${montant}`)
    } else if (methodePaiement === 'crypto') {
      // Simuler paiement crypto
      alert(`Adresse crypto générée pour un don de €${montant}`)
    } else {
      // Carte bancaire
      alert(`Traitement de la carte bancaire pour €${montant}`)
    }
  }

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Faire un Don</h1>
          <p className="text-xl text-gray-600">
            Votre générosité change des vies. Chaque don compte, peu importe le montant.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              {/* Informations Personnelles */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Vos Informations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optionnel)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Laissez un message d'encouragement..."
                    rows="4"
                  />
                </div>
              </div>

              {/* Montant */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Montant du Don</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
                  {montantsPredefinis.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMontant(m.toString())}
                      className={`py-3 rounded-lg font-bold transition-all ${
                        montant === m.toString()
                          ? 'bg-primary text-white scale-105'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      €{m}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Montant personnalisé (€) *
                  </label>
                  <input
                    type="number"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="0.00"
                    min="1"
                  />
                </div>
              </div>

              {/* Méthode de Paiement */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Méthode de Paiement</h2>
                <div className="space-y-3">
                  {[
                    { id: 'paypal', icon: FaPaypal, label: 'PayPal' },
                    { id: 'crypto', icon: FaBitcoin, label: 'Crypto-monnaies (Bitcoin, Ethereum)' },
                    { id: 'carte', icon: FaCreditCard, label: 'Carte Bancaire' }
                  ].map(({ id, icon: Icon, label }) => (
                    <label key={id} className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" style={{ borderColor: methodePaiement === id ? '#3B82F6' : '#D1D5DB' }}>
                      <input
                        type="radio"
                        name="paiement"
                        value={id}
                        checked={methodePaiement === id}
                        onChange={(e) => setMethodePaiement(e.target.value)}
                        className="w-5 h-5"
                      />
                      <Icon className="text-2xl mx-4 text-primary" />
                      <span className="font-semibold text-gray-800">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bouton Soumettre */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
              >
                Procéder au Paiement (€{montant || '0'})
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Pourquoi Donner ?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">✅ Sécurisé</h4>
                  <p className="text-gray-600 text-sm">
                    Tous les paiements sont cryptés et sécurisés
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">✅ Transparent</h4>
                  <p className="text-gray-600 text-sm">
                    Vous recevez un reçu détaillé de votre donation
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">✅ Impactant</h4>
                  <p className="text-gray-600 text-sm">
                    Votre don aide directement des personnes en besoin
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">✅ Déductible</h4>
                  <p className="text-gray-600 text-sm">
                    Votre don peut être déductible fiscalement
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  Questions ? Contactez-nous à
                  <br />
                  <span className="font-bold text-primary">support@donaaide.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation