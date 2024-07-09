import './App.css';
import DiscoverExperiences from './components/HomePage/DiscoverExperiences';
import HeroBanner from './components/HomePage/HeroBanner';
import Inspiration from './components/HomePage/Inspiration';
import Filter from './components/TopHeader/Filter';
import ProfileSection from './components/TopHeader/ProfileSection'


function App() {
  return (
    <div className="App">
      <ProfileSection />
      <Filter />
      <HeroBanner />
      <Inspiration />
      <DiscoverExperiences />
      
    </div>
  );
}

export default App;
