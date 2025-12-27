import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import waiLogo from '../assets/imgs/affilation/wai.png'
import biharGovtLogo from '../assets/imgs/affilation/bihar-govt.png'
import saiLogo from '../assets/imgs/affilation/sai.png'
import iwfLogo from '../assets/imgs/affilation/iwf.png'
import indOlympicLogo from '../assets/imgs/affilation/ind-olympic.png'
import myasLogo from '../assets/imgs/affilation/myas.png'


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <>
      {/* Top Utility Bar (Dark Brown) - Scrollable */}
      <div className="bg-amber-900 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-4 text-xs">
            <a href="#" className="hover:text-amber-200">Utility Link 1</a>
            <a href="#" className="hover:text-amber-200">Utility Link 2</a>
          </div>
        </div>
      </div>

      {/* Main Header Section (White) - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo and Association Name */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Bihar Wushu Association Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* Association Name */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#017cc2' }}>
                  BIHAR WUSHU ASSOCIATION
                </h1>
                <p className="text-xs text-gray-600">Official State Association</p>
              </div>
            </div>

            {/* Right Side - Affiliation Logos */}
            <div className="hidden md:flex items-center space-x-4">
              {/* WAI Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={waiLogo} 
                  alt="Wushu Association of India Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              
              {/* Bihar Govt Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={biharGovtLogo} 
                  alt="Bihar Government Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              
              {/* SAI Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={saiLogo} 
                  alt="SAI Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              
              {/* IWF Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={iwfLogo} 
                  alt="IWF Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              
              {/* IOC Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={indOlympicLogo} 
                  alt="Indian Olympic Association Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
              
              {/* MYAS Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src={myasLogo} 
                  alt="Ministry of Youth Affairs & Sports Logo" 
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Fixed */}
      <nav className="fixed left-0 right-0 text-white z-30" style={{ top: '104px', backgroundColor: '#017cc2', borderBottom: '5px solid #FF8C00' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Home
              </NavLink>
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-sm font-medium pb-1 flex items-center ${
                      isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                    }`
                  }
                >
                  About
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-40">
                    <NavLink
                      to="/district-units"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-opacity-10"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      District Units
                    </NavLink>
                    <NavLink
                      to="/members"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-opacity-10"
                      onClick={() => setAboutDropdownOpen(false)}
                    >
                      Committee Members
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/achievement"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Achievement
              </NavLink>
              <NavLink
                to="/anti-doping"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Anti Doping
              </NavLink>
              {/* <NavLink
                to="/events"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Events
              </NavLink> */}
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/rules-regulations"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Rules & Regulations
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive ? 'border-b-2 border-white' : 'hover:text-blue-100'
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* State Login Button */}
            {/* <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-sm font-bold ml-4">
              State Login
            </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Sidebar Header */}
            <div className="text-white p-4 flex items-center justify-between" style={{ backgroundColor: '#017cc2' }}>
              <h2 className="text-lg font-bold">Menu</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:opacity-80"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Sidebar Menu Items */}
            <nav className="flex flex-col py-4">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Home
              </NavLink>
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full px-6 py-3 text-left text-gray-700 border-l-4 border-transparent flex items-center justify-between"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }}
                >
                  <span className="font-medium">About</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileAboutOpen && (
                  <div className="bg-gray-50">
                    <NavLink
                      to="/district-units"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileAboutOpen(false)
                      }}
                      className={({ isActive }) =>
                        `px-10 py-2 text-sm text-gray-600 block ${
                          isActive ? '' : ''
                        }`
                      }
                      style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                      onMouseEnter={(e) => {
                        if (!e.currentTarget.classList.contains('active')) {
                          e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                          e.currentTarget.style.color = '#017cc2'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!e.currentTarget.classList.contains('active')) {
                          e.currentTarget.style.backgroundColor = ''
                          e.currentTarget.style.color = ''
                        }
                      }}
                    >
                      District Units
                    </NavLink>
                    <NavLink
                      to="/members"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileAboutOpen(false)
                      }}
                      className={({ isActive }) =>
                        `px-10 py-2 text-sm text-gray-600 block ${
                          isActive ? '' : ''
                        }`
                      }
                      style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                      onMouseEnter={(e) => {
                        if (!e.currentTarget.classList.contains('active')) {
                          e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                          e.currentTarget.style.color = '#017cc2'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!e.currentTarget.classList.contains('active')) {
                          e.currentTarget.style.backgroundColor = ''
                          e.currentTarget.style.color = ''
                        }
                      }}
                    >
                      Members
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/achievement"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Achievement
              </NavLink>
              <NavLink
                to="/anti-doping"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Anti Doping
              </NavLink>
              {/* <NavLink
                to="/events"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Events
              </NavLink> */}
              <NavLink
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/rules-regulations"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Rules & Regulations
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-gray-700 border-l-4 ${
                    isActive ? 'border-[#017cc2]' : 'border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: 'rgba(1, 124, 194, 0.1)', color: '#017cc2' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 124, 194, 0.05)'
                    e.currentTarget.style.color = '#017cc2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = ''
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                Contact Us
              </NavLink>
            </nav>
            
            {/* Affiliation Logos at Bottom */}
            <div className="mt-auto px-4 py-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase text-center">Affiliated With</p>
              <div className="flex flex-wrap justify-center gap-2">
                <img 
                  src={waiLogo} 
                  alt="Wushu Association of India Logo" 
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src={biharGovtLogo} 
                  alt="Bihar Government Logo" 
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src={saiLogo} 
                  alt="SAI Logo" 
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src={iwfLogo} 
                  alt="IWF Logo" 
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src={indOlympicLogo} 
                  alt="Indian Olympic Association Logo" 
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src={myasLogo} 
                  alt="Ministry of Youth Affairs & Sports Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
