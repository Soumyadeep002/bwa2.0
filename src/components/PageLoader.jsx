import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageLoader() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Show loader on route change
    setLoading(true)
    
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-[#017cc2] rounded-full animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
        </div>
        {/* Loading Text */}
        <p className="mt-4 text-[#017cc2] font-semibold text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default PageLoader

