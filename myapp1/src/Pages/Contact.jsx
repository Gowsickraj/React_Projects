import React, { useContext, useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/appContext';

const Contact = () => {

    // const validateForm = (event) =>{
    //     const name = document.getElementById("username").value;
    //     const email = document.getElementById("email").value;
    //     console.log(name,email);
    // }


    const { data, setData } = useContext(MyContext);
    const { loading, setLoading } = useContext(MyContext);


    console.log(data);



    return (
        <div>


            <form>
                <label for='username'>Name</label>
                <input type="text" id='username' />
                <label for='email'>Email</label>
                <input type="email" id='email' />
                <input type="submit" />
            </form>

            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            <ol>
                {data.length && !loading ? data.map((value) => (<li key={value.id}>title:{value.title}</li>)) : <p>No data found</p>}
            </ol>

            {loading?<Link to='/'>Home</Link>:<Link to='/contact'>Contact</Link>}

        </div>
    )
}

export default Contact
