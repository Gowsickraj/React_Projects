import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MyContext } from './Context';
import SignUp from './SignUp';

const LoginPage = () => {

    const { details, setDetails } = useContext(MyContext);
    const { error, setError } = useContext(MyContext);
    const { login, setLogin } = useContext(MyContext);

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
        if (!login) {
            e.preventDefault();

            axios.post(`${process.env.REACT_APP_SERVER}/api/getData`, details)
                .then((response) => {
                    if (response.data.code === 200) {
                        setDetails({});
                        console.log(response.data.msg);
                        console.log(response.data.data[0].mobile_number);

                        alert(`Welcome ${response.data.data[0].user_name}`);
                    }
                    else if (response.data.code === 400) {
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

    return (
        <div>

            {login &&

                <div className="container">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <label >Name :
                            <input name='name' value={details.name || ''} onChange={handleChange} />
                        </label>
                        <label>Mobile Number :
                            <input name="mobilenumber" value={details.mobilenumber || ''} onChange={handleChange} required />
                        </label>
                        <input type='submit' value="SignUp" />
                        <button onClick={() => setLogin(false)}>Login</button>

                    </form>
                </div>
            }


            {!login &&

                <div className="container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Mobile Number :
                            <input name="mobilenumber" value={details.mobilenumber || ''} onChange={handleChange} required />
                        </label>
                        <input type='submit' value="Login" />
                        <button onClick={()=>setLogin(true)}>Sign Up</button>
                    </form>
                </div>
            }

        </div>
    )
}

export default LoginPage
