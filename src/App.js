import Home from './Home.js'
import './App.css';
import MonthDetail from "./MonthDetail.js";
import NavBar from "./NavBar.js"
import NotFound from "./NotFound.js"
import HomePage from "./HomePage.js"
import Footer from "./Footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/month" element={<Home />} />
            
            <Route path="/month/:id" element={<MonthDetail />} />
          
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
