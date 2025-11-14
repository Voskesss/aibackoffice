export default function Services() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-fuchsia-500/10 to-primary-pink/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Oplossingen
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
              Computers die <span className="bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink bg-clip-text text-transparent">jouw werk</span> doen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We zorgen dat saai werk verdwijnt. Facturen verwerken? Emails beantwoorden? Rapporten schrijven? 
              Gebeurt voortaan vanzelf.
            </p>
          </div>
        </div>
      </section>

      {/* A. Bestaande Chatbots */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-100 via-fuchsia-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              1. Slimme chat-assistenten
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Zoals ChatGPT, maar dan voor jouw bedrijf
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mb-6">
              Misschien heb je wel eens met ChatGPT gewerkt. Wij maken zo'n assistent speciaal voor jou, met jouw informatie erin.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold border-2 border-purple-200">ChatGPT</span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold border-2 border-purple-200">Claude</span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold border-2 border-purple-200">Gemini</span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold border-2 border-purple-200">Le Chat</span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold border-2 border-purple-200">Copilot</span>
            </div>
          </div>

          {/* Wat wij doen */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-300 mb-12">
            <h3 className="text-2xl font-bold mb-6">💼 Wat wij doen:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">⚙️</span>
                <div>
                  <p className="font-bold text-gray-800">Aangepaste instructies</p>
                  <p className="text-sm text-gray-600">& sjablonen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎭</span>
                <div>
                  <p className="font-bold text-gray-800">Rollen &</p>
                  <p className="text-sm text-gray-600">persona's maken</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-bold text-gray-800">Documentensets</p>
                  <p className="text-sm text-gray-600">toevoegen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-bold text-gray-800">Werkflows</p>
                  <p className="text-sm text-gray-600">ontwerpen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-bold text-gray-800">Teams</p>
                  <p className="text-sm text-gray-600">trainen</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Voorbeelden */}
          <h3 className="text-2xl font-bold mb-6">✨ 3 Praktijkvoorbeelden:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Voorbeeld 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h4 className="text-lg font-bold mb-3">💬 Klantenservice-scripts</h4>
              <p className="text-gray-700 mb-3">ChatGPT getraind met jouw FAQ en tone-of-voice.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Team beantwoordt 3x sneller, altijd consistent.</p>
            </div>
            {/* Voorbeeld 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h4 className="text-lg font-bold mb-3">📊 Rapportagegeneratie</h4>
              <p className="text-gray-700 mb-3">Claude die wekelijkse rapporten schrijft op basis van jouw data.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Van 2 uur naar 10 minuten per rapport.</p>
            </div>
            {/* Voorbeeld 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h4 className="text-lg font-bold mb-3">📧 E-mailassistentie</h4>
              <p className="text-gray-700 mb-3">Gemini die concept-antwoorden maakt in jouw stijl.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Inbox onder controle, 1 uur per dag bespaard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B. Workflow-software / AI Agents */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              2. Alles op automatische piloot
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
              Van begin tot eind automatisch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mb-6">
              Hele processen die nu handmatig gaan, draaien straks vanzelf. 24 uur per dag, 7 dagen per week.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-700/80 rounded-full text-sm font-semibold border-2 border-purple-500/30 text-white">n8n</span>
              <span className="px-4 py-2 bg-gray-700/80 rounded-full text-sm font-semibold border-2 border-purple-500/30 text-white">Make</span>
              <span className="px-4 py-2 bg-gray-700/80 rounded-full text-sm font-semibold border-2 border-purple-500/30 text-white">Zapier</span>
              <span className="px-4 py-2 bg-gray-700/80 rounded-full text-sm font-semibold border-2 border-purple-500/30 text-white">OpenAI Agents</span>
            </div>
          </div>

          {/* Wat wij doen */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">🔧 Wat wij doen:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-bold text-white">Geautomatiseerde</p>
                  <p className="text-sm text-gray-400">processen ontwerpen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔗</span>
                <div>
                  <p className="font-bold text-white">Data koppelen</p>
                  <p className="text-sm text-gray-400">tussen systemen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-white">AI laten handelen</p>
                  <p className="text-sm text-gray-400">op triggers</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold text-white">Multi-step</p>
                  <p className="text-sm text-gray-400">workflows bouwen</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Voorbeelden */}
          <h3 className="text-2xl font-bold text-white mb-6">✨ 3 Praktijkvoorbeelden:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Voorbeeld 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">📧 E-mails → automatisch overzicht</h4>
              <p className="text-gray-300 mb-3">AI leest dagelijkse emails, maakt samenvatting per onderwerp.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Nooit meer iets missen, overzicht in 30 sec.</p>
            </div>
            {/* Voorbeeld 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">🧾 Factuurverwerking</h4>
              <p className="text-gray-300 mb-3">Factuur komt binnen → AI leest → boekt in systeem → bevestiging.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Volledig automatisch, 0 handmatig werk.</p>
            </div>
            {/* Voorbeeld 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">📝 Projectupdates genereren</h4>
              <p className="text-gray-300 mb-3">AI checkt taken in systeem, schrijft status update, verstuurt aan team.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Team altijd up-to-date zonder handwerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Micro-applicaties */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-fuchsia-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <span className="bg-gradient-to-r from-fuchsia-500 to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              3. Handige hulpjes op maat
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
              Tools die precies doen wat jij nodig hebt
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              Soms bestaat er gewoon geen programma voor wat je nodig hebt. Dan maken we het zelf. Klein, simpel, werkt perfect.
            </p>
          </div>

          {/* Wat wij bouwen */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-300 mb-12">
            <h3 className="text-2xl font-bold mb-6">🛠️ Wat wij bouwen:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="font-bold text-gray-800">Kleine webappjes</p>
                  <p className="text-sm text-gray-600">op maat</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-bold text-gray-800">Dashboards</p>
                  <p className="text-sm text-gray-600">voor overzicht</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-bold text-gray-800">Rapportgenerators</p>
                  <p className="text-sm text-gray-600">één klik, klaar</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-bold text-gray-800">Intakeflows</p>
                  <p className="text-sm text-gray-600">voor klanten</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold text-gray-800">Decision tools</p>
                  <p className="text-sm text-gray-600">slimme keuzes</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🧮</span>
                <div>
                  <p className="font-bold text-gray-800">Calculators</p>
                  <p className="text-sm text-gray-600">& mini CRM's</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Voorbeelden */}
          <h3 className="text-2xl font-bold mb-6">✨ 3 Praktijkvoorbeelden:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Voorbeeld 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all">
              <h4 className="text-lg font-bold mb-3">📊 Backoffice Dashboard</h4>
              <p className="text-gray-700 mb-3">Overzicht van alle belangrijke cijfers op één plek, realtime.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Geen Excel meer, alles in één scherm.</p>
            </div>
            {/* Voorbeeld 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all">
              <h4 className="text-lg font-bold mb-3">📝 Klant Intake Tool</h4>
              <p className="text-gray-700 mb-3">Vragenlijst die AI meteen omzet in een voorstel.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Klant vult in, voorstel is klaar.</p>
            </div>
            {/* Voorbeeld 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all">
              <h4 className="text-lg font-bold mb-3">🧮 Prijscalculator</h4>
              <p className="text-gray-700 mb-3">Tool die op basis van input direct een offerte berekent.</p>
              <p className="text-sm text-gray-600"><strong>Resultaat:</strong> Verkoop sneller, klant krijgt direct prijs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* D. AI Bridges */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <span className="bg-gradient-to-r from-primary-orange to-amber-400 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              4. Systemen laten samenwerken
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
              Data uit het ene programma, in het andere
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Je werkt met Excel én PowerPoint? Met een CRM én email? We zorgen dat ze met elkaar praten, automatisch.
            </p>
          </div>

          {/* Wat wij doen */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">🌉 Wat wij doen:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔗</span>
                <div>
                  <p className="font-bold text-white">AI als verbindingslaag</p>
                  <p className="text-sm text-gray-400">tussen systemen</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📤</span>
                <div>
                  <p className="font-bold text-white">Data ophalen →</p>
                  <p className="text-sm text-gray-400">AI bewerken → exporteren</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">👁️</span>
                <div>
                  <p className="font-bold text-white">Overzicht creëren</p>
                  <p className="text-sm text-gray-400">zonder nieuwe software</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Voorbeelden */}
          <h3 className="text-2xl font-bold text-white mb-6">✨ 3 Praktijkvoorbeelden:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Voorbeeld 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/30 hover:border-orange-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">📊 Excel → AI → PowerPoint</h4>
              <p className="text-gray-300 mb-3">Data uit Excel, AI maakt analyse, output als presentatie.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Presentatie klaar zonder handwerk.</p>
            </div>
            {/* Voorbeeld 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/30 hover:border-orange-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">💼 CRM → AI → klantupdate</h4>
              <p className="text-gray-300 mb-3">AI haalt klantdata op, schrijft persoonlijke update, verstuurt.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Klanten up-to-date, automatisch.</p>
            </div>
            {/* Voorbeeld 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/30 hover:border-orange-500 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">📧 E-mail → AI → antwoord + taak</h4>
              <p className="text-gray-300 mb-3">E-mail komt binnen → AI beantwoordt → maakt taak in systeem.</p>
              <p className="text-sm text-gray-400"><strong>Resultaat:</strong> Volledig afgehandeld, nul handmatig werk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Welke dienst past bij jou?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Laten we kijken wat de beste oplossing is voor jouw situatie.
          </p>
          <a
            href="/ai-intake"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
          >
            Plan een gratis gesprek
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
