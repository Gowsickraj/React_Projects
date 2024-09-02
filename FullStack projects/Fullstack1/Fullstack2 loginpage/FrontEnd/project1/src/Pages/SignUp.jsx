import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MyContext } from './Context';


const SignUp = () => {

    const { details, setDetails } = useContext(MyContext);
    const { error, setError } = useContext(MyContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevData) => (
            {
                ...prevData,
                [name]: value,
            }
        ))


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(process.env.REACT_APP_SERVER);
        axios.post(`${process.env.REACT_APP_SERVER}/api/getData`, details)
            .then((response) => {
                if (response.data.code === 200) {
                    setDetails({});
                    console.log(response.data.msg);
                    alert("Welcome");
                }
                else {
                    alert("get out")
                } if (response.data.code === 500) {
                    console.log(response.data.msg);

                }

            })
            .catch((error) => {
                console.log(error);
            })





    }


    return (


        <div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label >Name :
                        <input name='name' value={details.name || ''} onChange={handleChange} />
                    </label>
                    <label>Mobile Number
                        <input name="mobilenumber" value={details.mobilenumber || ''} onChange={handleChange} />
                    </label>
                    <input type='submit' value="Sign Up" />

                </form>
            </div>

        </div>
    )
}

export default SignUp
