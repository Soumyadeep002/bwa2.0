import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import PageLoader from './PageLoader'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Header />
      {/* Spacer to account for utility bar (32px) + fixed header (104px main + 48px nav = 152px) = 184px total */}
      <div className="h-[126px]"></div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
