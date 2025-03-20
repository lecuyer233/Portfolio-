import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Barre de navigation */}
      <nav className="w-full flex justify-between items-center p-5 max-w-6xl">
        <h1 className="text-2xl font-bold">Clara Lécuyer</h1>
        <div className="flex space-x-4">
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Accueil</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">À propos</button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg">Projets</button>
        </div>
        <div className="flex space-x-4 text-2xl">
          <FaGithub />
          <FaLinkedin />
          <BsFillMoonStarsFill />
        </div>
      </nav>

      {/* Contenu principal centré */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        {/* Espace pour la photo */}
        <div className="w-60 h-60 bg-gray-400 rounded-lg mb-5"></div>

        <h2 className="text-5xl font-bold">Bonjour, moi c'est Clara !</h2>
        <p className="text-xl mt-4 max-w-lg">
          Étudiant en <span className="text-teal-400">Science des Données</span>, 
          je partage avec vous mes projets d'analyse et de modélisation.
        </p>

        {/* Boutons des domaines */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-teal-600 px-6 py-3 rounded-lg text-lg">Data Analysis</button>
          <button className="bg-teal-600 px-6 py-3 rounded-lg text-lg">Data Science</button>
          <button className="bg-teal-600 px-6 py-3 rounded-lg text-lg">Machine Learning</button>
        </div>
      </div>
    </div>
  );
}


