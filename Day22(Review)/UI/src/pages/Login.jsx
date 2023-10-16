import { useState } from 'react';
import '../assets/css/Login.css'
import { userLogin} from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
function Login() {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const [error, setError] = useState({})
    const [login, setLogin] = useState(
        {
            email:"",
            password: ""
        }
    )
    const handleChange = (e) => {
        setLogin({...login, [e.target.id]:e.target.value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        const res = await userLogin(login);
        let validationErrors ={}
        if (!login.email.trim()) {
            validationErrors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(login.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!login.password.trim()) {
            validationErrors.password = "Password is required";
        }
        else if (login.password.length < 8) {
            validationErrors.password ="The password must be 8 characters or longer";
        }
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            if ((res.status) == "200" && (res.data.role)== "CUSTOMER")  {
            console.log(res.data);
            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            // localStorage.setItem('xuserPhone', res.data.phone);
            // localStorage.setItem('xuserAddress', res.data.address);
            toast.success(` Welcome ${res.data.name} !`, {
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
                navigate('/Dashboard');
            }, 1500);
        }
        else if ((res.status) == "200" && (res.data.role)== "ADMIN")  {
            console.log(res.data);
            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            // localStorage.setItem('xuserPhone', res.data.phone);
            // localStorage.setItem('xuserAddress', res.data.address);
            toast.success(` Welcome ${res.data.name} !`, {
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
                navigate('/admin/stocks/view');
            }, 1500);
        }
        // else if((res.status) == "200" && (res.data.role)== "ADMIN"){
        //     console.log(res.data);

        //     localStorage.setItem('Token', res.data.token);
        //     localStorage.setItem('Role', res.data.role);
        //     localStorage.setItem('AdminEmail', res.data.email);

        //     toast.success(` Welcome ${res.data.name} !`, {
        //         position: "bottom-right",
        //         autoClose: 1000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        //     setTimeout(() => {
        //         navigate('/admin/dashboard');
        //     }, 1500);
        // }
        
        else {
            toast.error(` Invalid Email | Password !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } 
          
        }

    };

    return (
        <div className="LoginBorder">
            <div className='LoginBox'>
                <div className='LoginBoxTop'>
                    <div className='LoginBoxTitle'>
                        <h2>Money Makers</h2>
                        <p>GROW WITH US
                        </p>
                    </div>
                    <form className="LoginForm" onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        {error.email && <span className='ErrorMsg'>{error.email}</span>}
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {error.password && <span className='ErrorMsg'>{error.password}</span>}
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className='LoginBoxBottom'>
                    <h3 >Don't have an account? <span onClick={() => navigate("/signup")}>Signup</span></h3>
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

export default Login;