import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">Bonjour, moi c'est Clara !</h1>
      <p className="text-lg text-center mt-4 text-gray-400">
        Étudiant en Science des Données, je partage avec vous mes projets d'analyse et de modélisation.
      </p>

      <div className="flex mt-6 space-x-4">
        <button className="px-4 py-2 bg-teal-500 rounded-full text-white">Data Analysis</button>
        <button className="px-4 py-2 bg-teal-500 rounded-full text-white">Data Science</button>
        <button className="px-4 py-2 bg-teal-500 rounded-full text-white">Machine Learning</button>
      </div>
    </div>
  );
}
