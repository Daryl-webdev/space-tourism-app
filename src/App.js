import NavBar from "./component/NavBar";
import Crew from "./component/pages/Crew";
import Destination from "./component/pages/Destination";
import Home from "./component/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Technology from "./component/pages/Technology";


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
