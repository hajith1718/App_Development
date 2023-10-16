import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


import { useState } from 'react';
import { adminAddProduct } from '../services/api';

import "../assets/css/AddProduct.css"
function AddProduct() {
  const [fileUrl, setFileUrl] = useState('');
  const navigate = useNavigate();
  const [addproduct,setproduct] = useState(
    {
      productName : "",
      productPrice: 0,
      productStatus: 0,
      productImage:"",
      productDesc:"",
    }
  )
  const handleChange = (e) => {
    e.preventDefault();
    setproduct({...addproduct,[e.target.id]:e.target.value})
  };
  const handleClick = async(e) => {
    e.preventDefault();
    try{
      const ProductData={
        ...addproduct,
        productImage:fileUrl,
      };
      console.log(ProductData)
      const res = await adminAddProduct(addproduct);
      if(res.status==201 && res.data.role=="ADMIN"){
        toast.success(`${addproduct.productName} Added Successfully !`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/admin/stocks/view')
        }, 1000)
      }
    }
    catch (error) {
       console.log(error);
       toast.error(`Can't add same product Twice !`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
  const routeBack = () => {
    navigate(-1)
  }
    return (
        <div className="l">
          <form onSubmit={handleClick}>
            <div className="input-group">
              <label >Name</label>
              <input   onChange={handleChange} type="text" id="productName" />
            </div>
            <div className="input-group">
              <label >Price</label>
              <input   onChange={handleChange} type="text" id="productPrice"/>
            </div>
            {/* <div className="input-group">
              <label >CurrentStatus</label>
              <input  onChange={handleChange} type="text" id="productStatus"/>
            </div> */}
            <div className="input-group">
              <label >Description</label>
              <textarea  placeholder='Description' cols="5" rows="3"  onChange={handleChange} type="text" id="productDesc"/>
            </div>
            <button type="submit" className="submit-btn" >
              Submit
            </button>
          </form>
          {/* <button className="btn2" onClick={routeBack} > BACK</button> */}
          {/* <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    
      /> */}
        </div>

        
      );
}

export default AddProduct

