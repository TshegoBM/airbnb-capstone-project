import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DiscoverExperiences from "./components/Home/DiscoverExperiences";
import HeroBanner from "./components/Home/HeroBanner";
import Inspiration from "./components/Home/Inspiration";
import ShopAirBnb from "./components/Home/ShopAirBnb";
import Filter from "./components/Header/Filter";
import ProfileSection from "./components/Header/ProfileSection";
import QuestionsAboutHosting from "./components/Home/QuestionsAboutHosting";
import FutureGetaways from "./components/Home/FutureGetaways";
import Footer from "./components/Footer/Footer";
import LocationsPage from "./components/LocationPage/LocationsCard";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import Layout from "./components/Footer/Layout"; // Adjust the import path based on your project structure
import Listing from "./components/Listing/Listing";
import LoginPage from "./components/Admin/LoginPage";

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
          <Route path="/locations">
          <ProfileSection />
            <Filter />
            <Layout>
              <LocationsPage />
            </Layout>
          </Route>
          <Route path="/listing">
          <ProfileSection />
            <Filter />
            <Layout>
              <Listing />
            </Layout>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
