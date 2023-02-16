import pages from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <pages.LandingPage />} />
        <Route path="/home" element={<pages.LandingPage />} />
        <Route path="/contact" element={<pages.ContactPage />} />
        <Route path="/about" element={ <pages.AboutPage />} />
        <Route path="/candidate_login" element={ <pages.LoginPage status="canLog" />} />
        <Route path="/candidate_register" element={ <pages.RegisterPage status="canReg" />} />
        <Route path="/company_login" element={ <pages.LoginPage status="comLog" />} />
        <Route path="/company_register" element={ <pages.RegisterPage status="comReg" />} />
        <Route path="*" element={ <pages.NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
