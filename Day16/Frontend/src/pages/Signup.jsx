import { useState } from 'react';
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { userRegister } from '../services/api';


function Signup() {
    const navigate = useNavigate();
    const [error,setError]=useState({})
    const [signup,setSignup] = useState(
      {
        name : "",
        email: "",
        password : "",
        role:"CUSTOMER"
      }
    )
    // const Signup = (e) => {
    //   e.preventDefault();
    //   console.log("Logging in with username:", signup.username);
    //   console.log("Password:", signup.password);
    // };
    
    const handleChange = (e) => {
      setSignup({...signup,[e.target.id]:e.target.value})
    };

    const handleClick = async(e) => {
      e.preventDefault();
      setError({});
      let validationErrors={}
      if(!signup.name.trim())
      {
        validationErrors.name="Name is required";
      }
      if(!signup.email.trim())
      {
        validationErrors.email="Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(signup.email))
      {
        validationErrors.email="Email is invalid";
      }
      if(!signup.password.trim())
      {
        validationErrors.password="Password is required";
      }
      else if (signup.password.length < 8) {
        validationErrors.password ="The password must be 8 characters or longer";
    }

     setError(validationErrors);
     if(Object.keys(validationErrors).length===0){
       const res = await userRegister(signup);
       if(res.data==="User registered successfully" && res.status==200){
        toast.success(` Signup Successfull !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      setTimeout(() => {
          navigate('/Login');
      }, 1500);
        }
      else if (res.data==="Sommething went wrong!" && res.status==="400") {
          toast.error(`Sommething went wrong!`, {
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
    }

    
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
           <h2>Money Makers</h2>
              <p>JOIN US AND GROW WITH US
              </p>
            </div>
            <form className="SignupForm" onSubmit={handleClick}>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
                {error.name && <span className='ErrorMsg'>{error.name}</span>}
              {/* <input
                onChange={handleChange}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your name"
              />
                {error.name && <span className='ErrorMsg'>{error.name}</span>} */}
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                placeholder="Enter E-mail"
              />
              {error.mail && <span className='ErrorMsg'>{error.mail}</span>}
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Create password"
              />
                {error.password && <span className='ErrorMsg'>{error.password}</span>}
              <button type="submit"  onClick={handleClick} >Signup</button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <h3>Already have an account? <span onClick={()=>navigate("/Login")}>Login</span></h3>
          </div>
        </div>
          <ToastContainer
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
            />
      </div>
      
    );
  }
  
  export default Signup;