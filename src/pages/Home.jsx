import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    goal: '',
    skillLevel: 'beginner',
    weeklyHours: 10
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store form data in localStorage for now
    localStorage.setItem('userData', JSON.stringify(formData))
    navigate('/roadmap')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Your AI Learning Path Generator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Enter your learning goals and get a personalized roadmap to success
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            What's your learning goal?
          </label>
          <input
            type="text"
            id="goal"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            placeholder="e.g., Learn AI/ML, Crack Google Internship"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="skillLevel"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Skill Level
          </label>
          <select
            id="skillLevel"
            value={formData.skillLevel}
            onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="weeklyHours"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Hours Available per Week
          </label>
          <input
            type="number"
            id="weeklyHours"
            value={formData.weeklyHours}
            onChange={(e) => setFormData({ ...formData, weeklyHours: parseInt(e.target.value) })}
            min="1"
            max="40"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate My Learning Path
        </button>
      </form>
    </motion.div>
  )
}

export default Home 