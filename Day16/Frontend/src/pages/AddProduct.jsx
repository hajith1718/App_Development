import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import "../assets/css/AddProduct.css"
function AddProduct() {
  const navigate = useNavigate();
  const [addproduct,setproduct] = useState(
    {
      productName : "",
      poductPrice: "",
      productStatus: "",
      mutualImage:"null",
      mutualDesc:"",
    }
  )
  const handleClick = async(e) => {
    e.preventDefault();
  }
    return (
        <div className="l">
          <form>
            <div className="input-group">
              <label htmlFor="mutualName">Name</label>
              <input type="text" id="productName" />
            </div>
            <div className="input-group">
              <label htmlFor="productPrice">Price</label>
              <input type="text" id="productPrice"/>
            </div>
            <div className="input-group">
              <label htmlFor="productStatus">CurrentStatus</label>
              <input type="text" id="productPrice"/>
            </div>
            <div className="input-group">
              <label htmlFor="productDescription">Description</label>
              <input type="text" id="productDescription"/>
            </div>
            <button type="submit" className="submit-btn" onSubmit={handleClick}>
              Submit
            </button>
          </form>
        </div>
      );
}

export default AddProduct

