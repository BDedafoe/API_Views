import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './views/Home';
import Recipes_API from './views/recipesAPI';
import Sports_API from './views/sportsAPI';

function App() {
  return (
    <div className="App"> 
      <Router>
        <div className="nav">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Recipes API
          </NavLink>
          <NavLink
            to="/sports"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Sports API
          </NavLink>
     
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/recipes' element={<Recipes_API/>} />
            <Route path='/sports' element={<Sports_API/>} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
