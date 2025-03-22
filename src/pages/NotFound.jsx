function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFound;
