import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError(); // Get error details (if any)

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-lg">Something went wrong.</p>
      {error?.status && <p className="text-red-400 text-lg">Error {error.status}: {error.statusText || "Unknown error"}</p>}
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
        Go Home
      </Link>
    </div>
  );
}

export default Error;
