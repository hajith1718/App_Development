import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StockWatch from './pages/StockWatch';
import Stocks from './pages/Stocks';
import Account from './pages/Account';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard/watch" element={<StockWatch/>} />
          <Route path="/dashboard/Stocks" element={<Stocks/>} />
          <Route path="/dashboard/Account" element={<Account/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;