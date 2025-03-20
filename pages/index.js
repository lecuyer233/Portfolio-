import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center p-5 bg-black">
        <h1 className="text-2xl font-bold text-white">Clara Lécuyer</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-teal-600 rounded-lg">Accueil</button>
          <button className="px-4 py-2 bg-teal-600 rounded-lg">À propos</button>
          <button className="px-4 py-2 bg-teal-600 rounded-lg">Projets</button>
        </div>
        <div className="flex space-x-4">
          <FaGithub size={24} />
          <FaLinkedin size={24} />
          <MdDarkMode size={24} />
        </div>
      </nav>
      
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-x-10 text-center">
        {/* Photo Placeholder */}
        <div className="w-60 h-60 bg-gray-400 rounded-lg"></div>
        
        {/* Texte */}
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold">Bonjour, moi c'est Clara !</h2>
          <p className="text-lg text-gray-300 mt-4">
            Étudiant en <span className="text-teal-400">Science des Données</span>, je partage avec vous mes projets d'analyse et de modélisation.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center mt-6 space-x-3">
            <button className="px-4 py-2 bg-teal-600 rounded-lg">Data Analysis</button>
            <button className="px-4 py-2 bg-teal-600 rounded-lg">Data Science</button>
            <button className="px-4 py-2 bg-teal-600 rounded-lg">Machine Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
}

