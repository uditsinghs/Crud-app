

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="mt-2 text-lg text-gray-700">Oops! Page not found.</p>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist or an error occurred.</p>
        <button
          className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default Error