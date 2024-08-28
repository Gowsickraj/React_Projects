import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {

    // const [info, setInfo] = useState([]);
    const [details, setDetails] = useState({});
    const [savedData, setSavedData] = useState([]);

    const fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER}/get`)
            .then(response => {
                if (response.data.code === 200) {
                    setSavedData(response.data.data)
                    // console.log(response.data.data, "response")
                }
            }
            )
    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // setInfo((prevInfo) => (
        //     [...prevInfo,
        //         details

        //     ]
        // ))

        axios.post(`${process.env.REACT_APP_SERVER}/save`, details)
            .then(response => {
                // console.log(response.data)
                if (response.data.code === 200) {
                    fetchData();
                }
            }
            )

    }

    // console.log(details, "saved data obj of array");
    // console.table(details,"details")
    // console.log(savedData, "data");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }

    // console.log(details, "object");
    // console.log(info, "arrayof objects");

    const updateDetails = (index) => {

        const arr = savedData[index];
        setDetails(arr);
        console.log(arr,"update");

    }

    const deleteDetails = (index) => {

        axios.delete(`${process.env.REACT_APP_SERVER}/api/delete`, index)
            .then(response => {
                fetchData();

                if (response.data.code === 200) {
                    console.log("data deleted succesfully");
                    fetchData();
                    console.log("use-effect");
                }
                else {
                    console.log("Data does not exist");
                }

            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label id='firstname' /> Firstname :
                <input type='text' name='firstname' value={details.firstname} onChange={handleChange} />
                <label id='lastname' /> LastName :
                <input type='text' name='lastname' value={details.lastnmae} onChange={handleChange} />
                <label id='dob' /> Date of Birth :
                <input type='date' name='dob' value={details.dob} onChange={handleChange} />
                <input type='submit'></input>

            </form>

            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Date of Birth</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {savedData && savedData.map((item, index) => (


                        <tr key={index}>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.dob}</td>
                            <td>
                                <button onClick={() => updateDetails(index)}>Update</button>
                            </td>
                            <td>
                                <button onClick={() => deleteDetails(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                    )}


                </tbody>
            </table>



        </div>
    )
}

export default Form

