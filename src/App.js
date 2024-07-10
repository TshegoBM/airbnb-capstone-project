import './App.css';
import DiscoverExperiences from './components/HomePage/DiscoverExperiences';
import HeroBanner from './components/HomePage/HeroBanner';
import Inspiration from './components/HomePage/Inspiration';
import ShopAirBnb from './components/HomePage/ShopAirBnb';
import Filter from './components/TopHeader/Filter';
import ProfileSection from './components/TopHeader/ProfileSection'
import QuestionsAboutHosting from './components/HomePage/QuestionsAboutHosting';
import FutureGetaways from './components/HomePage/FutureGetaways';


function App() {
  return (
    <div className="App">
      <ProfileSection />
      <Filter />
      <HeroBanner />
      <Inspiration />
      <DiscoverExperiences />
      <ShopAirBnb /> 
      <QuestionsAboutHosting /> 
      <FutureGetaways />
    </div>
  );
}

export default App;
