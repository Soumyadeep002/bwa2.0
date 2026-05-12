import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#017cc2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Wushu Association */}
          <div>
            <h3 className="text-lg font-bold mb-4">BIHAR WUSHU ASSOCIATION</h3>
            <p className="text-blue-200 text-sm">
              Promoting excellence in Wushu sports across Bihar.
            </p>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-lg font-bold mb-4">EVENTS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="text-blue-200 hover:text-white">National Events</Link></li>
              <li><Link to="/events" className="text-blue-200 hover:text-white">State Events</Link></li>
              <li><Link to="/events" className="text-blue-200 hover:text-white">District Events</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="/achievement" className="text-blue-200 hover:text-white">Achievements</Link></li>
              <li><Link to="/gallery" className="text-blue-200 hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Martial Art Office Harisabha Chowk, Muzaffarpur, Bihar 842001</li>
              <li>biharwushuassociation@gmail.com</li>
              <li>+91 7462872460</li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0024 3z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bihar_wushu?igsh=MWNqcjE3bTVtdGpkYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white"
                aria-label="Instagram @bihar_wushu"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-sm" style={{ borderTopColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
          <p>&copy; {new Date().getFullYear()} Bihar Wushu Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
