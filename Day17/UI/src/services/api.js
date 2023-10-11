import axios from "axios";
let jwtToken = localStorage.getItem('Token');
// const headers = {

// }
const authheader = `Bearer ${jwtToken}`;
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};
const url = 'http://localhost:8181'
const userLogin =(login)=>axios.post(`${url}/auth/login`, login);
const adminAddProduct =(addproduct)=>axios.post(`${url}/stocks/add`,addproduct, {headers});
const userRegister =(signup)=>axios.post(`${url}/auth/register`,signup);
const getProduct = () => axios.get(`${url}/stocks/get`)
const deleteProduct = (id) => axios.delete(`${url}/product/delete/${id}`, { headers })


export {userLogin,userRegister,adminAddProduct,getProduct,deleteProduct};