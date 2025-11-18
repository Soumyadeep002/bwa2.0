import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DistrictUnits from './pages/DistrictUnits'
import Members from './pages/Members'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Achievement from './pages/Achievement'
import GovernmentCompliance from './pages/GovernmentCompliance'
import AntiDoping from './pages/AntiDoping'
import RulesRegulations from './pages/RulesRegulations'
import Results from './pages/Results'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="district-units" element={<DistrictUnits />} />
          <Route path="members" element={<Members />} />
          <Route path="government-compliance" element={<GovernmentCompliance />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="anti-doping" element={<AntiDoping />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="rules-regulations" element={<RulesRegulations />} />
          <Route path="results" element={<Results />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
