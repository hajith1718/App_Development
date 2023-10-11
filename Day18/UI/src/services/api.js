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
const getProduct = () => axios.get(`${url}/stocks/get`,{headers})
const deleteProduct = (id) => axios.delete(`${url}/stocks/delete/${id}`, { headers })
const editProduct = (id, product) => axios.put(`${url}/stocks/edit/${id}`, product, { headers })
const getProductbyId = (id) => axios.get(`${url}/stocks/find/${id}`, { headers })



export {userLogin,userRegister,adminAddProduct,getProduct,deleteProduct,editProduct,getProductbyId};