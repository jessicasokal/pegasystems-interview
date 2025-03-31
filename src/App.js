import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyDashboard from "./pages/MyDashboard";
import Spaces from "./pages/Spaces";
import Documents from "./pages/Documents";
import Bugs from "./pages/Bugs";
import Epics from "./pages/Epics";
import Goals from "./pages/Goals";
import Notifications from "./pages/Notifications";
import Recents from "./pages/Recents";
import MyApplications from "./pages/MyApplications";
import Bug from "./pages/Bug";
import Epic from "./pages/Epic";
import UserStory from "./pages/UserStory";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import user from "./data/user";
import navigationTabs from "./data/navigationTabs";
import navigationFixedTabs from "./data/navigationFixedTabs";
import pegaLogo from "./assets/images/pegalogo.png";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation appName={"Demo"} user={user} tabs={navigationTabs} fixedTabs={navigationFixedTabs} logo={pegaLogo}/>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/mydashboard" element={<MyDashboard />}/>
              <Route path="/spaces" element={<Spaces />}/>
              <Route path="/documents" element={<Documents />}/>
              <Route path="/bugs" element={<Bugs />}/>
              <Route path="/epics" element={<Epics />}/>
              <Route path="/goals" element={<Goals />}/>
              <Route path="/notifications" element={<Notifications />}/>
              <Route path="/recents" element={<Recents />}/>
              <Route path="/myapplications" element={<MyApplications />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/create/bug" element={<Bug />}/>
              <Route path="/create/epic" element={<Epic />}/>
              <Route path="/create/userstory" element={<UserStory />}/>
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
