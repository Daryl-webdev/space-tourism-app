import NavBar from "./UI/NavBar";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Technology from "./pages/Technology";


function App() {
  return <>
    <Router >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  </>

}

export default App;
