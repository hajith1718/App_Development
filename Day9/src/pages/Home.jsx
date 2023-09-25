import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>

  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h4>Learn about<br></br>investing and<br></br> Groww</h4>
        </div>
        <div className='SubContent'>
        <h4>You'll Wonder Where The Yellow Went, <br></br>When You Brush Your Teeth With Investment.</h4>
        </div>
        <div className='Start'>
        <button data-text="Awesome" class="button" onClick={()=>navigate("/signup")} >
    <span class="actual-text">&nbsp;Join&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Join&nbsp;</span>
</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://res.cloudinary.com/digo6wzsf/image/upload/v1695119595/6736639_ztpo5a.jpg" width="650" height="600"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;