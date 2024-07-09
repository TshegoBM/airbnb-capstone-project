import './App.css';
import DiscoverExperiences from './components/HomePage/DiscoverExperiences';
import HeroBanner from './components/HomePage/HeroBanner';
import Inspiration from './components/HomePage/Inspiration';


function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Inspiration />
      <DiscoverExperiences />
    </div>
  );
}

export default App;
