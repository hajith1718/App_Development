import React, { useState } from "react";
import "../assets/css/Leftbar.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from "../redux/userSlice";
const SideBar = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    dispatch(logout())
    navigate("/")
  }
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
      </div>
      <ul className="navbar__list">
          <div className="navbar__li-box">
              <li className="navbar__li" onClick={()=>navigate("/dashboard/watch")}>
                        Dashboard
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li" onClick={()=>navigate("/dashboard/Account")}>
              Account Info
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li" onClick={()=>navigate("/dashboard/Stocks")}>
             Stocks
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li"  onClick={()=>navigate("/dashboard/Mutualfunds")}>
            Mutual Funds          
            </li>
          </div>
          {/* <div className="navbar__li-box">
            <li className="navbar__li">
              Cart            </li>
          </div> */}
      </ul>
      <br></br>
      <br></br>
      <ul>
        <li>
        <div className="log">
        <Button  style={{backgroundColor: "red",}}  variant="contained" onClick={logoutHandler}>Logout</Button> 
        </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
