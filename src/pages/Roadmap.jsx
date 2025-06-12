import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Roadmap() {
  const navigate = useNavigate()
  const [roadmap, setRoadmap] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (!userData) {
      navigate('/')
      return
    }

    // Simulate API call to generate roadmap
    setTimeout(() => {
      const mockRoadmap = {
        goal: userData.goal,
        timeline: [
          {
            week: 1,
            focus: "Foundation",
            tasks: [
              "Learn basic concepts and terminology",
              "Set up development environment",
              "Complete introductory tutorials"
            ]
          },
          {
            week: 2,
            focus: "Core Skills",
            tasks: [
              "Practice fundamental techniques",
              "Work on small projects",
              "Join learning communities"
            ]
          },
          {
            week: 3,
            focus: "Advanced Topics",
            tasks: [
              "Study advanced concepts",
              "Work on complex projects",
              "Participate in discussions"
            ]
          }
        ]
      }
      setRoadmap(mockRoadmap)
      setLoading(false)
    }, 1500)
  }, [navigate])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Your Learning Roadmap
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {roadmap.goal}
        </p>
      </div>

      <div className="space-y-8">
        {roadmap.timeline.map((week) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3 mr-4">
                <span className="text-indigo-600 dark:text-indigo-300 font-bold">
                  Week {week.week}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {week.focus}
              </h2>
            </div>
            <ul className="space-y-2">
              {week.tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-2">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/mentor')}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Chat with AI Mentor
        </button>
      </div>
    </motion.div>
  )
}

export default Roadmap 