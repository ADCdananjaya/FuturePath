import pages from "./pages";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import components from "./components";
import { useState } from "react";

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);
  const [ loginType, setLoginType ] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <pages.LandingPage />} />
        <Route path="/home" element={<pages.LandingPage />} />
        <Route path="/contact" element={<pages.ContactPage />} />
        <Route path="/about" element={ <pages.AboutPage />} />
        <Route path="/candidate_login" element={ <pages.LoginPage status="canLog" setAuthenticated={setIsAuthenticated} setLoginType={setLoginType} />} />
        <Route path="/candidate_register" element={ <pages.RegisterPage status="canReg" />} />
        <Route path="/company_login" element={ <pages.LoginPage status="comLog" setAuthenticated={setIsAuthenticated} setLoginType={setLoginType}/>} />
        <Route path="/company_register" element={ <pages.RegisterPage status="comReg" />} />
        <Route path="/dashboard" element={isAuthenticated? <pages.Dashboard userType={loginType} />: <Navigate replace to="/candidate_login"/>} />
        <Route path="*" element={ <pages.NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
