export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-center">Bonjour, moi c'est Cl !</h1>
      <p className="text-lg text-center mt-2">
        Étudiant en Science des Données, je partage avec vous mes projets d'analyse et de modélisation.
      </p>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">Data Analysis</button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">Data Science</button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">Machine Learning</button>
      </div>
    </div>
  );
}


