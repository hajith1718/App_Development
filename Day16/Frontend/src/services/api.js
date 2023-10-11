import axios from "axios";
let jwtToken = localStorage.getItem('Token');
// const headers = {

// }
const url = 'http://localhost:8181'
const userLogin =(login)=>axios.post(`${url}/auth/login`, login);

const userRegister =(signup)=>axios.post(`${url}/auth/register`,signup);
export {userLogin,userRegister};