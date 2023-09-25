import React from 'react'
import "../assets/css/Dashboard.css"
import {useSelector} from 'react-redux'
import { selectUser}  from "../redux/userSlice"
import SideBar from '../Components/SideBar'
import Navd from '../Components/NavBarDashboard'
function Dashboard() {
    const user=useSelector(selectUser)
  return (
    <>
    <div>
        <Navd/>
        <div className='Dashboard'>
          <SideBar/>
          <div className="main">
          <div className='user'>
            <div className="userf">
                <h1>Welcome <span>{user.username}</span>!</h1>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;