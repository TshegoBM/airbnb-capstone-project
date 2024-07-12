// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DiscoverExperiences from "./components/HomePage/DiscoverExperiences";
import HeroBanner from "./components/HomePage/HeroBanner";
import Inspiration from "./components/HomePage/Inspiration";
import ShopAirBnb from "./components/HomePage/ShopAirBnb";
import Filter from "./components/TopHeader/Filter";
import ProfileSection from "./components/TopHeader/ProfileSection";
import QuestionsAboutHosting from "./components/HomePage/QuestionsAboutHosting";
import FutureGetaways from "./components/HomePage/FutureGetaways";
import Footer from "./components/HomePage/Footer";
import LocationsPage from "./components/LocationPage/LocationsPage";
import LocationsDetails from "./components/LocationDetails/LocationsDetails";
// import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ProfileSection />
        <Filter />
        <Switch>
          <Route path="/" exact>
            <HeroBanner />
            <Inspiration />
            <DiscoverExperiences />
            <ShopAirBnb />
            <QuestionsAboutHosting />
            <FutureGetaways />
            <Footer />
          </Route>
          <Route path="/locations">
            <LocationsPage />
          </Route>
          <Route path="/locationsdetails">
          <LocationsDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
