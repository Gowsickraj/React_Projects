import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

    const [details, setDetails] = useState({});
    const [error, setError] = useState("");

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
        e.preventDefault();

        // console.log(process.env.REACT_APP_SERVER);
        axios.post(`${process.env.REACT_APP_SERVER}/api/post`, details)
            .then((response) => {
                if (response.data.code === 200) {
                    console.log(response.data.msg);
                }
                if (response.data.code === 500) {
                    console.log(response.data.msg);
                }

            })
            .catch((error) => {
                console.log(error);
            })





    }

    return (
        <div>


            <h1>Login</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label >Name :
                        <input name='name' value={details.name} onChange={handleChange} />
                    </label>
                    <label>Mobile Number
                        <input name="mobilenumber" value={details.mobilenumber} onChange={handleChange} />
                    </label>
                    <input type='submit' value="Login" />

                </form>
            </div>

        </div>
    )
}

export default LoginPage
