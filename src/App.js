import NavBar from "./UI/NavBar";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Technology from "./pages/Technology";
// import PageWrapper from "./UI/PageWrapper";

function App() {


  return <>
    <Router >
      <NavBar />
      {/* <PageWrapper backgroundImageUrl={backgroundImage}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      {/* </PageWrapper> */}
    </Router>
  </>

}

export default App;
