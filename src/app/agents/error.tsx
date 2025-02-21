'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Try again
      </button>
    </div>
  )
} 