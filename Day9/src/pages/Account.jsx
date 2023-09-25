import React from 'react'
import Navd from '../Components/NavBarDashboard'
import SideBar from '../Components/SideBar'
import "../assets/css/Account.css"
function Account() {
  return ( 
    <div>   
        <Navd/>
        <div className='MainCointainer'>
            <div className='1side'>
                <SideBar/>
            </div>
            <div className='2side'>
                <div className='Box'>
                    hello
                </div>
                <div className='Box'>
                    how r u?
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account;