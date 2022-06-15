import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './locations/Home';

function Intro() {
  return (
    <div className='App'>
      <h1>Hello, ShipStation!</h1>
      <img src={require("../src/assets/shipstation.png")} alt="Loading..." />
      <p>Press the button below to go to the dashboard.</p>
      <Link to="/home"><button>Go to Home</button></Link>
    </div>
  )
}

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={ <Intro /> } />
          <Route path="/home/*" element={ <Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;