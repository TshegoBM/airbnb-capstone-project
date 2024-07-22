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
import Layout from "./components/Footer/Layout"; // Adjust the import path based on your project structure
import Listing from "./components/Listing/Listing";
import LoginPage from "./components/Admin/LoginPage";
import CreateListings from "./components/Admin/CreateListings";
import LocationsPage from "./components/LocationPage/LocationsPage";
import ListingsPage from "./components/LocationPage/ListingsPage"; // Ensure this path is correct

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
            <ProfileSection />
            <Filter />
            <Layout>
              <LocationsPage />
            </Layout>
          </Route>

          <Route path="/listings">
            <ProfileSection />
            <Filter />
              <ListingsPage />
          </Route>

          <Route path="/listing" exact>
            <ProfileSection />
            <Filter />
            <Layout>
              <Listing />
            </Layout>
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
