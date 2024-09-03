import React, { useContext, useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MyContext } from './Context';
import SignUp from './SignUp';
import { Link, replace } from 'react-router-dom';

const LoginPage = () => {

    const { details, setDetails } = useContext(MyContext);
    const { error, setError } = useContext(MyContext);
    const { login, setLogin } = useContext(MyContext);
    const inputRef = useRef();
    // const { navi } = useContext(MyContext);


    // useEffect(() => {
    //     navi(window.location.pathname, { replace: true });
    // }, [navi])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevData) => (
            {
                ...prevData,
                [name]: value,
            }
        ))


    }

    // const fetchData = ()=>{
    //     axios.get(`${process.env.REACT_APP_SERVER}/api/get`).
    // }

    const handleSubmit = (e) => {
        // console.log(process.env.REACT_APP_SERVER);
        e.preventDefault();
        if (!login) {

            axios.post(`${process.env.REACT_APP_SERVER}/api/login`, details)
                .then((response) => {
                    if (response.data.code === 200) {
                        setDetails({});

                        console.log(response);
                        // console.log(response.data.data[0].mobile_number);
                        alert(`Welcome ${response.data.data[0].user_name}`);
                        setError(true);
                        inputRef.current.style.display = "none";
                        localStorage.setItem("jwttoken", JSON.stringify(response.data.jwt_token));

                    }
                    else if (response.data.code === 400) {
                        if (response.data.msg === "user registered already") {
                            alert("user registered already")
                        }
                        alert("no user found");
                        setLogin(true);

                    }
                    else if (response.data.code === 500) {
                        console.log(response.data.msg);

                    }

                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            axios.post(`${process.env.REACT_APP_SERVER}/api/post`, details)
                .then((res) => {
                    if (res.data.code === 200) {
                        setDetails({});
                        console.log(res.data.msg);
                    }
                    else {
                        console.log(res.data.msg);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }

    const backToLoginButton = (e) => {


    }

    return (
        <div>

            <div className="container" ref={inputRef}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Mobile Number :
                        <input name="mobilenumber" value={details.mobilenumber || ''} onChange={handleChange} required />
                    </label>
                    <input type='submit' value="Login" />
                    <button>
                        <Link to="signup">Sign Up</Link></button>
                </form>
            </div>

            {/* {error &&
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h1>Welcome</h1>
                        <button onClick={() => {
                            setError(false);
                            inputRef.current.style.display = "inline-block";
                            localStorage.removeItem("jwttoken");
                        }}>Back to login</button>
                    </div>
                </div>
            } */}

        </div>
    )
}

export default LoginPage
