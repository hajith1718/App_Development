import React from 'react'
import "../assets/css/Dashboard.css"
import {useSelector} from 'react-redux'
import { selectUser}  from "../redux/userSlice"
import SideBar from '../Components/SideBar'
import Navd from '../Components/NavBarDashboard'
import Footer from './Footer'
function Dashboard() {
    const user=useSelector(selectUser)
  return (
    <>
    <div>
        <div className='Dashboard'>
          <SideBar/>
          <div className="main2">
          <div className='user'>
            <div className="userf">
              HELLO
                {/* <h1>Welcome <span>{user.email}</span>!</h1> */}
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;