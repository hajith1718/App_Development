import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StockWatch from './pages/StockWatch';
import Stocks from './pages/Stocks';
import Account from './pages/Account';
import MutualFunds from './pages/Mutualfunds';
import TermsHome from './pages/TermsHome';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Privacy from './pages/Privacy';
import Faq from './pages/FAQ';
import AdminStocks from './pages/AdminStocks';
import AddProduct from './pages/AddProduct';
// import FAQ from './pages/FAQ';
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
          <Route path="/dashboard/Mutualfunds" element={<MutualFunds/>} />
          <Route path="/terms" element={<TermsHome/>} />
          <Route path="/termsd" element={<Terms/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/privacy" element={<Privacy/>} />  
           <Route path="/faq" element={<Faq/>} />  
           <Route path="/dashboard/account" element={<Account/>} />  
           <Route path="/admin/stocks" element={<AdminStocks/>} />  
           <Route path="/admin/stocks/addstocks" element={<AddProduct/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;