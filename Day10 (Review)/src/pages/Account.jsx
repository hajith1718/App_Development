import React from 'react'
import Navd from '../Components/NavBarDashboard'
import SideBar from '../Components/SideBar'

function Account() {
  return (
    <div>
        <Navd/>
        <div className='Mains'>
            <div className='left'>
                <SideBar/>
            </div>
            <div className='right'>
                <div className="account-info">
                    <h1>Account Information</h1>
                    <p>Name: MANI BHARATHY T</p>
                    <p>Email: manibharathy027@gmail.com</p>
                    <p>Balance: $1000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account