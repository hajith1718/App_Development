import React from 'react'
import "../assets/css/Dashboard.css"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../services/api';

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
            {/* <div className='us1'>
          <div className='user1'>
            <div className='new21'>HELLO 👋<br></br>Welcome Back</div>
          </div>
          </div> */}
          <div className='hel1'>
          <div className='shadow bg-white data-table-container'>
          <table className='data-table'>
            <thead className='data-table-thead shadow'>
              <tr>
                <th>
                  Product Name
                </th>
                <th>
                  Product Price
                </th>
                <th>
                  Product Description
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) ? (
                products.map((product) => (
                  <tr key={product.pid}>
                    {/* <td> <img src={product.productImage} className='mini-product-img' /></td> */}
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productDesc}</td>
                    <td>
                      <button className='btn'>BUY STOCK</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Products Available !</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;