import React, { createContext, useContext, useState } from 'react'
import Details from './Details';
import './Form.css';
import { AppContext } from './Context';

const Form = () => {
    const { info, setInfo } = useContext(AppContext);
    const { age, setAge } = useContext(AppContext);
    const { personalInfo, setPersonalInfo } = useContext(AppContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevState) => ({ ...prevState, [name]: value }));
        // console.log(e.target);

    }


    // console.log(info, "info : object");


    const handleSubmit = (e) => {
        e.preventDefault();
        checkNumber(e);
        // console.log(info);
        setPersonalInfo((prevData) => [...prevData, info]);
        // console.log(personalInfo, 'personalinfo - array');
    }

    const handleCombineChange = (e) => {
        handleChange(e);
        calculateAge(e);
    }

    const calculateAge = (e) => {

        let birthDate = new Date(e.target.value);
        let todayDate = new Date();

        // console.log(birthDate.getMonth());
        // console.log(todayDate.getMonth());


        let age = todayDate.getFullYear() - birthDate.getFullYear();
        let monthDifference = todayDate.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || monthDifference == 0 && todayDate.getDate() < birthDate.getDate()) {
            age--;
        }

        setAge(age);

        setInfo((prevState) => (
            {
                ...prevState,
                "age": age
            }
        ))

    }

    // const checkNumber = (e) => {

    //     const number = e.target.value;
    //     console.log(number, "phonenumber");

    //     if (personalInfo.length === 0) {
    //         setInfo((prevState) => ({ ...prevState, "mobilenumber": number }))
    //         console.log("inserted");
    //     } else {
    //         console.log("false");
    //         let numberExists = false;
    //         personalInfo.map((item) => {
    //             if (item.mobilenumber.includes(number)) {
    //                 numberExists = true;
    //                 console.log("hello");
    //                 setInfo((prevState) => ({ ...prevState, "mobilenumber": 123 }));

    //             }
    //         });

    //         if (!numberExists) {
    //             setInfo((prevState) => ({ ...prevState, "mobilenumber": number }))
    //             console.log("hello2");

    //         }

    //     }
    // }

    // console.log(personalInfo, "personal info");

    const checkNumber = (e) => {

        
        const { name, value } = e.target;
        const number = info.mobilenumber;
        console.log(number, "phonenumber");

        if (personalInfo.length === 0) {
            setInfo((prevState) => ({ ...prevState, [name]: value }));
            // console.log("inserted");
            window.alert("inserted")

        } else {

            console.log("Enter 109");

            // let numberExists;

            personalInfo.map((item) => {
                console.log(item.mobilenumber);
                console.log(number);
                if (item.mobilenumber == number ) {
                    // numberExists = true;
                    // console.log("hello");
                    window.alert("duplicate")
                    setInfo((prevState) => ({ ...prevState, [name]: "123" }));
                }

                else {
                    setInfo((prevState) => ({ ...prevState, [name]: value }));
                    console.log("hello2");

                }
            });

            // if (!numberExists) {

            // }
        }
    };
    const combinedNumberFunction = (e) => {
        handleChange(e);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'> First Name : </label>
                <input type='text' id='firstname' name='firstname' value={info.firstname} onChange={handleChange} />
                <label htmlFor='lastname'>Last Name : </label>
                <input type='text' id='lastname' name='lastname' value={info.lastname} onChange={handleChange} />
                <label htmlFor='mobnum'>Mobile : </label>
                <input type='number' id='mobnum' name='mobilenumber' value={info.mobilenumber} onChange={combinedNumberFunction} />
                <label htmlFor='dob'>Date of Birth : </label>
                <input type='date' id='dob' name="dateofbirth" value={info.dateofbirth} onChange={handleCombineChange} />
                <input type='submit' />
            </form>


            <Details data={personalInfo} />


        </div>
    )
}
export default Form
