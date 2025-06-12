import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/brain.svg" alt="Mindcraft AI" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Mindcraft AI
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/roadmap"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Roadmap
            </Link>
            <Link
              to="/mentor"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Mentor
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 