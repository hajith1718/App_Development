import React from 'react'
import "../assets/css/Dashboard.css"
// import {useSelector} from 'react-redux'
// import { selectUser}  from "../redux/userSlice"
import SideBar from '../Components/SideBar'
import Navd from '../Components/NavBarDashboard'
import Footer from './Footer'
const  Dashboard=() =>{
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProduct()
      setProducts(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
    <div>
        <div className='Dashboard1'>
          <SideBar/>
          <div className="main21">
          <div className='user1'>
            <div className='new21'>HELLO 👋<br></br>Welcome Back</div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;