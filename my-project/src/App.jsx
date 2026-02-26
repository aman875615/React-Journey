import './App.css'

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind Working 🚀
      </h1>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        
        <div>
          <img 
            className="w-48 h-48 object-cover shadow-xl rounded-md"
            alt="nature"
            src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>

      </div>
    </>
  )
}

export default App