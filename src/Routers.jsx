import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PrayerSection from "./PrayerSection";
import PrayerTrack from "./PrayerTrack";
import Students from "./Students";
function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/prayerTrack" element={<PrayerTrack />}></Route>

          <Route path="/22092023ikindi" element={<PrayerSection />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
