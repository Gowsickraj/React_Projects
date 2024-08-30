import React from 'react';
import { useState } from 'react';

const LoginPage = () => {

    const [details, setDetails] = useState({});

    const handleChange = (e) => {

    }

    const handleSubmit = () => {

    }

    return (
        <div>


            <h1>Login</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label >Name :
                        <input name='user_name' value={details.user_name} onChange={handleChange} />
                    </label>
                    <label>Mobile Number
                        <input name="mobile_number" value={details.mobile_number} onChange={handleChange} />

                    </label>
                </form>
            </div>

        </div>
    )
}

export default LoginPage
