export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-6">
        
        {/* IMAGE DE PROFIL */}
        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-800">
          <img
            src="/profile.jpg" 
            alt="Clara"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTE PRINCIPAL */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white">Bonjour, moi c'est Clara !</h1>
          <p className="text-lg text-gray-300 mt-4">
            Étudiant en <span className="text-teal-400">Science des Données</span>, 
            je partage avec vous mes projets d'analyse et de modélisation.
          </p>
          
          {/* BOUTONS */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-teal-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-teal-600 transition">
              Data Analysis
            </button>
            <button className="bg-teal-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-teal-600 transition">
              Data Science
            </button>
            <button className="bg-teal-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-teal-600 transition">
              Machine Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


