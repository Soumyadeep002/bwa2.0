import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DistrictUnits from './pages/DistrictUnits'
import Members from './pages/Members'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Achievement from './pages/Achievement'
import AntiDoping from './pages/AntiDoping'
import RulesRegulations from './pages/RulesRegulations'
import Layout from './components/Layout'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="district-units" element={<DistrictUnits />} />
          <Route path="members" element={<Members />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="anti-doping" element={<AntiDoping />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="rules-regulations" element={<RulesRegulations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin" element={<AdminLogin />} />
        <Route path="admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
