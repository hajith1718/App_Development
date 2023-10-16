import React from 'react'
import Navd from '../Components/NavBarDashboard'
import SideBar from '../Components/SideBar'
import '../assets/css/Account.css'
import Footer from './Footer'
function Account() {
  return (
    <div>
        <div className='Mains'>
            <div className='left'>
                <SideBar/>
            </div>
            <div className='right'>
                <div className="account-info">
                    <h1>Account Information</h1>
                    <p>Name: Mohamed Hajith A</p>
                    <p>Email: mdhajith789@gmail.com</p>
                    <p>Balance: ₹10000</p>
                    <p>Total Order: 143</p>
                    <p>Profit Obtained:₹3900</p>
                    <p> Loss :₹200</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account