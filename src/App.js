import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import VideoBackground from './VideoBackground';
import Description from './Description';
import CompaniesBox from './CompaniesBox';
import LineBreaker from './LineBreaker';
import TeamSection from './TeamSection';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route path="/login" element={<Login />} />
      </Routes>
      <VideoBackground />
      <Description />
      <CompaniesBox />
      <LineBreaker />
      <TeamSection />
    </div>
    </Router>
  );
}

export default App;
