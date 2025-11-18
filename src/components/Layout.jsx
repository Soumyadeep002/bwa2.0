import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Spacer to account for utility bar (32px) + fixed header (104px main + 48px nav = 152px) = 184px total */}
      <div className="h-[126px]"></div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
