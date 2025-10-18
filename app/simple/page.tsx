export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl font-bold">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Next.js funcionando!
        </h1>
        <p className="text-gray-600 mb-8">
          El servidor está ejecutándose correctamente. Ahora podemos proceder con la configuración completa.
        </p>
        <div className="space-y-4">
          <a 
            href="/test" 
            className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Probar página de test
          </a>
          <a 
            href="/" 
            className="block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Ir a página principal
          </a>
        </div>
      </div>
    </div>
  );
}
