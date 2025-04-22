// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsSection from './components/NewsSection';
// import Slider from './components/Slider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsSection key="general" pageSize={20} country="us" category="general" />} />
          <Route exact path="/business" element={<NewsSection key="business" pageSize={20} country="us" category="business" />} />
          <Route exact path="/sports" element={<NewsSection key="sports" pageSize={20} country="us" category="sports" />} />
          <Route exact path="/science" element={<NewsSection key="science" pageSize={20} country="us" category="science" />} />
          <Route exact path="/health" element={<NewsSection key="health" pageSize={20} country="us" category="health" />} />
          <Route exact path="/technology" element={<NewsSection key="technology" pageSize={20} country="us" category="technology" />} />
          <Route exact path="/entertainment" element={<NewsSection key="entertainment" pageSize={20} country="us" category="entertainment" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
