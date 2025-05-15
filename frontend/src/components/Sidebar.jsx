import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Doctors', path: '/doctors', icon: '🩺' },
  { name: 'About', path: '/about', icon: 'ℹ️' },
  { name: 'Contact', path: '/contact', icon: '📞' },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      {/* Toggle Button (visible on all screen sizes) */}
      <button
  onClick={handleToggle}
  className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 transition-all"
  aria-label="Open sidebar"
>
  {/* Icon or Text */}
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>


      {/* Backdrop (click to close) */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span className="text-xl text-primary font-bold">DocSeek</span>
          </div>
          {/* Optional Close Button inside sidebar */}
          <button onClick={handleClose} className="text-2xl font-bold text-gray-500 hover:text-gray-800">
            ×
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-4 pt-6 gap-2">
          {navItems.map(({ name, path, icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={handleClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 ${
                  isActive ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700'
                }`
              }
            >
              <span className="text-lg">{icon}</span>
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
