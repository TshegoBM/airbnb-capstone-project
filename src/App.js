import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import DiscoverExperiences from "./components/Home/DiscoverExperiences";
import HeroBanner from "./components/Home/HeroBanner";
import Inspiration from "./components/Home/Inspiration";
import ShopAirBnb from "./components/Home/ShopAirBnb";
import Filter from "./components/Header/Filter";
import ProfileSection from "./components/Header/ProfileSection";
import QuestionsAboutHosting from "./components/Home/QuestionsAboutHosting";
import FutureGetaways from "./components/Home/FutureGetaways";
import Layout from "./components/Footer/Layout";
import Reviews from "./components/Listing/Reviews"
import HostSection from './components/Listing/HostSection';
import ThingsToKnow from './components/Listing/ThingsToKnow';
import Listing from './components/Listing/Listing';
import LoginPage from "./components/Admin/LoginPage";
import CreateListings from "./components/Admin/CreateListings";
import ListingsPage from "./components/ListingsPage";
import LocationFilter from './components/LocationPage/LocationFilter';
import LocationCards from './components/LocationPage/LocationCards';
import LocationDetails from './components/LocationDetails/LocationDetails';
import LocationDetailsHeader from './components/LocationDetails/LocationDetailsHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ProfileSection />
            <Filter />
            <Layout>
              <HeroBanner />
              <Inspiration />
              <DiscoverExperiences />
              <ShopAirBnb />
              <QuestionsAboutHosting />
              <FutureGetaways />
            </Layout>
          </Route>
          
          <Route path="/locations" exact>
            <LocationFilter />
              <LocationCards />
          </Route>

          <Route path="/listings" exact>
            <ProfileSection />
            <Filter />
            <ListingsPage />
          </Route>


          <Route path="/location-details/:id" exact>
              <Listing />
          </Route>
          
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/createlisting" exact>
            <CreateListings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
