export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ✅ Next.js está funcionando correctamente
        </h1>
        <p className="text-gray-600">
          Si puedes ver esta página, el servidor está funcionando.
        </p>
        <div className="mt-4">
          <a 
            href="/es" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Ir a la página principal
          </a>
        </div>
      </div>
    </div>
  );
}
