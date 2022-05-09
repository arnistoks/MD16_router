import React from 'react';
import './App.scss';
import {
  BrowserRouter as
  Router, NavLink, Routes, Route,
} from 'react-router-dom';
import Logo from './data/logo.png';
import Up from './data/up.png';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/Characters/CharactersPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import AboutPage from './pages/About/AboutPage';
import Page404 from './pages/Page404/Page404';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <div className="logo rotate">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <nav className="navigation">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/characters" className="link">Characters</NavLink>
          <NavLink to="/episodes" className="link">Episodes</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <footer className="footer">
        <nav className="navigation navigation__footer">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/characters" className="link">Characters</NavLink>
          <NavLink to="/episodes" className="link">Episodes</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
        </nav>
        <span className="made">Made by me</span>
      </footer>
    </Router>
    <button className="up__button" onClick={() => window.scrollTo(0, 0)}>
      <img className="up__image" src={Up} alt="Up" />
    </button>
  </div>
);

export default App;
