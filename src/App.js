import PathConstants from './pathConstants';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListProfileComponent from './components/ListProfileComponent';
import SingleProfileComponent from './components/SingleProfileComponent';
import CreateProfileComponent from './components/CreateProfileComponent';
import UpdateProfileComponent from './components/UpdateProfileComponent';
import About from './components/AboutUs';

function App() {
  return (
    <div className="container">
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path={PathConstants.HOME} Component={ListProfileComponent} />
            <Route path={PathConstants.EMP_GETALL} Component={ListProfileComponent} />
            <Route path={PathConstants.EMP_GETONE} Component={SingleProfileComponent} />

            <Route path={PathConstants.EMP_ADD} Component={CreateProfileComponent} />
            <Route path={PathConstants.EMP_UPDATE} Component={UpdateProfileComponent} />

            <Route path={PathConstants.ABOUT} Component={About} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;