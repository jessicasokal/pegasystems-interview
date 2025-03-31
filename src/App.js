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
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation appName={"Demo"}/>
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
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
