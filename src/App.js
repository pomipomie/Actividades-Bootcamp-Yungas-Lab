import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Users from './Users';
import Coins from './Coins';
import WordBox from './WordBox';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <p>Hello world</p>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Coins">Coins</Link>
          </li>
          <li>
            <Link to="/WordBox">Context Input</Link>
          </li>
        </ul>
      </div>

        <hr />
      <div>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="coins" element={<Coins />} />
        <Route path="wordbox" element={<WordBox />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
