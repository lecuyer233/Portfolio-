export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-white">Bonjour, moi c'est Clara !</h1>
        <p className="text-lg text-gray-300 mt-4">
          Étudiant en <span className="text-teal-400">Science des Données</span>, je partage avec vous mes projets d'analyse et de modélisation.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-teal-500 px-4 py-2 rounded-lg text-white font-semibold">Data Analysis</button>
          <button className="bg-teal-500 px-4 py-2 rounded-lg text-white font-semibold">Data Science</button>
          <button className="bg-teal-500 px-4 py-2 rounded-lg text-white font-semibold">Machine Learning</button>
        </div>
      </div>
    </div>
  );
}

