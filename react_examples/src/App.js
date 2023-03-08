import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './views/Home';
import Recipes_API from './views/recipesAPI';
import Drinks_API from './views/drinksAPI'
import TradingViewWidget from './components/TradingViewWidget';

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
            to="/drinks"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Drinks API
          </NavLink>
          <NavLink
            to="/stocks"
            style={({ isActive }) => ({
              color: isActive ? 'aqua' : '#545e6f',
              textDecoration: 'none'
            })}
          >
            Stocks
          </NavLink>
     
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/recipes' element={<Recipes_API/>} />
            <Route path='/drinks' element={<Drinks_API/>} />
            <Route path='/stocks' element={<TradingViewWidget/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
