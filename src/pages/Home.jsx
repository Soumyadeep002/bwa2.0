import HeroBanner from '../components/HeroBanner'
import BWAFounder from '../components/BWAFounder'
// import WushuEvents from '../components/WushuEvents'
import WushuTeam from '../components/WushuTeam'
import OurAchievement from '../components/OurAchievement'
import WushuSports from '../components/WushuSports'
import Affiliation from '../components/Affiliation'

function Home() {
  return (
    <>
      <HeroBanner />
      <BWAFounder />
      {/* <WushuEvents /> */}
      <WushuTeam />
      <OurAchievement />
      <WushuSports />
      <Affiliation />
    </>
  )
}

export default Home
