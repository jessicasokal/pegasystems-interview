import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyDashboard from "./pages/MyDashboard";
import Spaces from "./pages/Spaces";
import Documents from "./pages/Documents";
import Bugs from "./pages/Bugs";
import Epics from "./pages/Epics";
import Goals from "./pages/Goals";
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
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
