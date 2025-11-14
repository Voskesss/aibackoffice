// Import images so Vite handles the paths correctly for GitHub Pages
import josPhoto from '/public/images/jos.jpeg';
import golfBackground from '/public/images/golf.jpg';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section - Ultra Modern */}
      <section className="min-h-[90vh] relative flex items-center overflow-hidden bg-gray-900">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/30 via-fuchsia-500/30 to-primary-pink/30"></div>
          <div className="absolute top-0 -left-40 w-80 h-80 bg-primary-purple rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-primary-pink rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(123,97,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,97,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary-purple animate-pulse"></div>
                <span className="text-sm font-medium">Computers die je werk doen</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                Minder werk,<br />
                <span className="bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink bg-clip-text text-transparent">
                  meer tijd
                </span><br />
                voor jou
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Stel je voor: vervelende taken verdwijnen. Emails worden vanzelf beantwoord. Rapporten schrijven zichzelf. Dat kan écht.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105">
                  <span className="relative z-10">Start nu →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all">
                  Bekijk cases
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">AI-projecten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Op maat</div>
                </div>
              </div>
            </div>

            {/* Right - Personal photo with layers */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative w-full flex items-center justify-center">
                {/* Layer 1: Background wave image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={golfBackground} 
                    alt="Background waves" 
                    className="w-full h-full object-cover rounded-full blur-sm"
                  />
                </div>
                
                {/* Layer 2: Animated gradient rings */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-purple/30 to-primary-pink/30 animate-pulse"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-fuchsia-500/20 to-primary-purple/20 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Layer 3: Photo container */}
                <div className="relative z-10">
                  <div className="relative group">
                    {/* Rotating gradient border effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse"></div>
                    
                    {/* Main photo - responsive size */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                      <img 
                        src={josPhoto} 
                        alt="Jos - AI Backoffice" 
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 via-transparent to-primary-pink/0 group-hover:from-primary-purple/20 group-hover:to-primary-pink/20 transition-all duration-300"></div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine"></div>
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl rotate-12 shadow-xl flex items-center justify-center animate-bounce" style={{animationDuration: '3s'}}>
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-primary-pink rounded-2xl -rotate-12 shadow-xl flex items-center justify-center animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    
                    {/* Extra floating element */}
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-primary-orange to-amber-400 rounded-xl rotate-45 shadow-lg flex items-center justify-center animate-pulse">
                      <svg className="w-8 h-8 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Services - Bento Grid Style */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-200 via-fuchsia-100 to-pink-200 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-primary-pink/10 to-fuchsia-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Wat we voor je doen</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">Zo helpen we jou</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Van kleine verbeteringen tot je hele administratie automatisch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border-2 border-amber-100 hover:border-primary-orange transition-all hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-orange to-amber-300 rounded-2xl opacity-10"></div>
              <div className="relative">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-orange to-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Snelle verbeteringen</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Je gebruikt dingen die al bestaan, maar dan slimmer. Denk aan ChatGPT, maar dan speciaal voor jou.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong className="text-gray-800">Hoe werkt het?</strong></p>
                  <p>→ Wij leren de computer jouw manier van werken</p>
                  <p>→ Je geeft opdrachten in gewone taal</p>
                  <p>→ Computer doet het werk, jij checkt het</p>
                  <p className="text-primary-orange font-semibold mt-3">Klaar in 1-2 weken</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-purple-50 via-fuchsia-50 to-purple-50 p-8 rounded-3xl border-2 border-purple-100 hover:border-primary-purple transition-all hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-purple to-fuchsia-400 rounded-2xl opacity-10"></div>
              <div className="relative">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-purple via-fuchsia-500 to-primary-pink rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Hele processen automatisch</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Van begin tot eind zonder dat jij iets hoeft te doen. De computer let op wat er binnenkomt en regelt het.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong className="text-gray-800">Hoe werkt het?</strong></p>
                  <p>→ Email/factuur komt binnen → Computer ziet het</p>
                  <p>→ Computer leest, begrijpt en verwerkt</p>
                  <p>→ Zet in het juiste systeem, stuurt reactie</p>
                  <p className="text-primary-purple font-semibold mt-3">24/7 actief, nooit ziek</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 p-8 rounded-3xl border-2 border-pink-100 hover:border-primary-pink transition-all hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-pink to-rose-300 rounded-2xl opacity-10"></div>
              <div className="relative">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-pink to-rose-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Persoonlijke hulp</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eenmalig instellen is niet genoeg. We bouwen iets speciaal voor jou, precies wat jij nodig hebt.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong className="text-gray-800">Hoe werkt het?</strong></p>
                  <p>→ We luisteren naar wat jij nodig hebt</p>
                  <p>→ Maken een tool/assistent op maat</p>
                  <p>→ Blijven het verbeteren als je situatie verandert</p>
                  <p className="text-primary-pink font-semibold mt-3">Groeit mee met je bedrijf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools & Implementaties - Detailed Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 relative overflow-hidden">
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/8 via-transparent to-primary-pink/8"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Onze aanpak</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">AI Tools & Implementaties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van bestaande chatbots tot custom oplossingen — voor elk proces de juiste AI-tool
            </p>
          </div>

          <div className="space-y-16">
            {/* A. Bestaande Chatbots */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-100 hover:border-primary-purple transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-indigo-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">A. Bestaande Chatbots</h3>
                  <p className="text-gray-500 mb-6 text-sm">ChatGPT, Claude, Gemini, Le Chat, Copilot</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-purple">Wat wij doen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Aangepaste instructies & sjablonen',
                          'Rollen & persona\'s maken',
                          'Documentensets toevoegen',
                          'Werkflows ontwerpen',
                          'Teams trainen in praktisch gebruik'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-purple">Beste toepassingen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Klantenservice-scripts',
                          'Rapportagegeneratie',
                          'E-mailassistentie',
                          'Documenten analyseren',
                          'Persoonlijke workflows'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Workflow-software */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100 hover:border-primary-blue transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-indigo-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">B. Workflow-software / AI Agents</h3>
                  <p className="text-gray-500 mb-6 text-sm">n8n, Make, Zapier, OpenAI Agents</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-blue">Wat wij doen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Geautomatiseerde processen ontwerpen',
                          'Data koppelen tussen systemen',
                          'AI laten handelen op triggers',
                          'Multi-step workflows bouwen'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-blue">Beste toepassingen:</h4>
                      <ul className="space-y-2">
                        {[
                          'E-mails → automatisch overzicht',
                          'Factuurverwerking',
                          'Projectupdates genereren',
                          'CRM / finance / planning koppelen',
                          'Herhalende taken automatiseren'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* C. Micro-applicaties */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-100 hover:border-primary-orange transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-amber-400 rounded-2xl flex items-center justify-center">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">C. Micro-applicaties</h3>
                  <p className="text-gray-500 mb-6 text-sm">Custom mini tools — gebouwd op maat</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-orange">Wat wij bouwen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Kleine webappjes op maat',
                          'Dashboards',
                          'Rapportgenerators',
                          'Intakeflows',
                          'Decision tools',
                          'Mini CRM\'s of calculators'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-orange">Beste toepassingen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Tools voor backoffice',
                          'Tools die niet bestaan in standaardsoftware',
                          'Snel schakelen zonder dure pakketten'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* D. AI Bridges */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 hover:border-primary-pink transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-pink to-rose-400 rounded-2xl flex items-center justify-center">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">D. AI Bridges</h3>
                  <p className="text-gray-500 mb-6 text-sm">Koppelingen tussen processen die nu "los" staan</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-pink">Wat wij doen:</h4>
                      <ul className="space-y-2">
                        {[
                          'AI als verbindingslaag tussen systemen',
                          'Data ophalen → AI bewerken → exporteren',
                          'Overzicht creëren zonder nieuwe software'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-primary-pink">Beste toepassingen:</h4>
                      <ul className="space-y-2">
                        {[
                          'Excel → AI → PowerPoint',
                          'CRM → AI → klantupdate',
                          'E-mail → AI → antwoord + taak'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom AI Backoffice - Dark Section */}
      <section className="relative py-24 md:py-32 bg-gray-900 overflow-hidden">

        {/* Background gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-pink font-semibold text-sm uppercase tracking-wider">Waarom wij</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
              Ai die écht werkt
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mensen eerst</h3>
              <p className="text-gray-300">
                Ai is geen vervanging van mensen — het versterkt ze. Jouw team blijft centraal.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Op maat</h3>
              <p className="text-gray-300">
                Wij bouwen alleen wat echt werkt voor jouw team. Geen standaard oplossingen.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Veilig & praktisch</h3>
              <p className="text-gray-300">
                Laagdrempelig, veilig en praktisch. Implementatie die naadloos aansluit.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Hoe werkt het - Light with decorative lines */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-fuchsia-100 via-purple-100 to-pink-100 overflow-hidden">
        {/* Decorative line pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Proces</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">Hoe we samenwerken</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Van eerste kennismaking tot doorlopende ondersteuning
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink opacity-20"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                { num: "1", title: "Intake", desc: "Kennismaking", color: "from-primary-purple to-fuchsia-500" },
                { num: "2", title: "Analyse", desc: "Processen in kaart", color: "from-fuchsia-500 to-primary-pink" },
                { num: "3", title: "Voorstel", desc: "Concrete oplossingen", color: "from-primary-pink to-rose-400" },
                { num: "4", title: "Implementatie", desc: "Bouwen & testen", color: "from-rose-400 to-primary-pink" },
                { num: "5", title: "Support", desc: "Doorlopend contact", color: "from-primary-pink to-fuchsia-500" }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className={`bg-gradient-to-br ${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg hover:scale-110 transition-transform`}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases - Dark Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="inline-block w-1 h-1 bg-primary-purple rounded-full m-2"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-pink font-semibold text-sm uppercase tracking-wider">Cases</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
              In de praktijk
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Voorbeelden van wat Ai voor jou kan betekenen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary-purple/50 transition-all">
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl flex items-center justify-center">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Excel + Ai</h3>
              <p className="text-gray-300 leading-relaxed">
                Ai maakt complete Excelsheets voor BTW-vragen, financiële berekeningen en analyses.
              </p>
              <div className="mt-4 text-primary-purple group-hover:text-primary-pink transition-colors font-semibold">
                Meer info →
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary-pink/50 transition-all">
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-fuchsia-500 to-primary-pink rounded-2xl flex items-center justify-center">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">PowerPoint Generator</h3>
              <p className="text-gray-300 leading-relaxed">
                Van kwartaalcijfers naar kant-en-klare presentatie in seconden.
              </p>
              <div className="mt-4 text-primary-purple group-hover:text-primary-pink transition-colors font-semibold">
                Meer info →
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-fuchsia-500/50 transition-all">
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary-purple to-fuchsia-500 rounded-2xl flex items-center justify-center">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">PDF-analyse</h3>
              <p className="text-gray-300 leading-relaxed">
                Ai leest meerdere documenten en maakt één duidelijk overzicht.
              </p>
              <div className="mt-4 text-primary-purple group-hover:text-primary-pink transition-colors font-semibold">
                Meer info →
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary-pink/50 transition-all">
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary-pink to-rose-400 rounded-2xl flex items-center justify-center">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Ai-agent workflows</h3>
              <p className="text-gray-300 leading-relaxed">
                Automatische taken zoals factuurverwerking, e-mailoverzichten en rapportgeneratie.
              </p>
              <div className="mt-4 text-primary-purple group-hover:text-primary-pink transition-colors font-semibold">
                Meer info →
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* TikTok Videos - Carousel */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Ai Backoffice op TikTok</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">Zie Ai in actie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Ontdek hoe we AI praktisch toepassen in korte, to-the-point video's
            </p>
            <a 
              href="https://www.tiktok.com/@aibackoffice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              @aibackoffice volgen
            </a>
          </div>

          {/* TikTok Profile Widget */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-4xl">
              <script 
                src="https://www.tiktok.com/embed.js"
                async
              ></script>
              <blockquote 
                className="tiktok-embed" 
                cite="https://www.tiktok.com/@aibackoffice" 
                data-unique-id="aibackoffice" 
                data-embed-from="embed_page" 
                data-embed-type="creator"
                style={{maxWidth: '780px', minWidth: '288px', margin: '0 auto'}}
              >
                <section>
                  <a 
                    target="_blank" 
                    title="@aibackoffice" 
                    href="https://www.tiktok.com/@aibackoffice?refer=creator_embed"
                  >
                    @aibackoffice
                  </a>
                </section>
              </blockquote>
            </div>
          </div>
          
          {/* Alternative: Direct link if embed doesn't work immediately */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              Video's laden? Kijk direct op ons TikTok profiel →
            </p>
          </div>
        </div>
      </section>

      {/* Vibecoders Community */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-purple via-fuchsia-500 to-primary-pink overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center md:h-[500px]">
            {/* Left - Voor klanten */}
            <div className="relative md:rotate-[-2deg] md:hover:rotate-0 transition-transform duration-300 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 text-white shadow-2xl md:w-[450px]">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                Voor organisaties
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Klaar om AI in te zetten?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Ontdek hoe AI jouw backoffice kan transformeren. Van quick wins tot volledige automatisering.
              </p>
              <button className="w-full md:w-auto px-8 py-4 bg-white text-primary-purple rounded-full font-bold hover:scale-105 transition-all shadow-2xl">
                Plan een gesprek →
              </button>
            </div>

            {/* Right - Voor vibecoders */}
            <div className="relative md:rotate-[2deg] md:hover:rotate-0 transition-transform duration-300 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 text-white shadow-2xl md:w-[450px]">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                Voor vibecoders
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Vibe je op AI-tools?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Word onderdeel van onze community. Werk mee aan vette projecten met n8n, Make, OpenAI Agents en custom tools.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experimenteren met cutting-edge AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexibel samenwerken aan projecten</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Leren & groeien in de AI-wereld</span>
                </div>
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-white text-primary-purple rounded-full font-bold hover:scale-105 transition-all shadow-2xl">
                Join de vibes →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Final Push */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 via-fuchsia-500/5 to-primary-pink/5"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-pink/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary-purple to-primary-pink rounded-full text-white font-semibold">
            Klaar voor de volgende stap?
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Start vandaag nog
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ontdek in een gratis gesprek waar Ai jouw backoffice kan verbeteren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Plan een gesprek →
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-bold text-lg hover:border-primary-purple transition-all">
              Bekijk cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
