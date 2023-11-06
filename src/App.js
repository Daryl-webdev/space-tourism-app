import NavBar from "./UI/NavBar";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home"
import { Route, Routes, useLocation } from "react-router-dom";
import Technology from "./pages/Technology";
// import PageWrapper from "./UI/PageWrapper";

function App() {
  const location = useLocation();
  return <>

    <NavBar pathName={location.pathname} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </>

}

export default App;
