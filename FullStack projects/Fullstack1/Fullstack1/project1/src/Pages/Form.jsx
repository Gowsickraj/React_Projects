import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {

    // const [info, setInfo] = useState([]);
    const [details, setDetails] = useState({});
    const [savedData, setSavedData] = useState([]);
    const [index, setIndex] = useState("");
    const [update, setUpdate] = useState("Submit");

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

        if (update === "Submit") {

            if (Object.keys(details).length > 0) {

                axios.post(`${process.env.REACT_APP_SERVER}/api/post`, details)
                    .then((response) => {
                        // console.log(response, "axios")
                        if (response.data.code === 200) {
                            fetchData();
                            setUpdate("Submit");
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            else {
                alert("no data to submit")
            }
        }
        else if (update === "Update") {
            console.log(details, "update state");
            axios.put(`${process.env.REACT_APP_SERVER}/api/update`, { details, index })
                .then(response => {
                    console.log(response, "axios put");
                    if (response.data.code === 200) {
                        fetchData();
                        setUpdate("Submit");
                    }

                })
        }

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
        setIndex(index);
        setDetails(arr);
        // console.log(arr, "update");
        setUpdate("Update");


    }

    const deleteDetails = (index) => {

        axios.delete(`${process.env.REACT_APP_SERVER}/api/delete`, index)
            .then(response => {
                if (response.data.code === 200) {
                    console.log("data deleted succesfully");
                    fetchData();
                    // console.log("use-effect");
                }
                else {
                    console.log("Data does not exist");
                }

            })

    }

    return (
        <div>

            <div className='container'>


                <div className='form-data'>


                    <form onSubmit={handleSubmit}>
                        <div>
                            <label >FirstName

                                <input type='text' name='firstname' value={details.firstname} onChange={handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>LastName

                                <input type='text' name='lastname' value={details.lastname} onChange={handleChange} />
                            </label>
                        </div>

                        <div>
                            <label>City

                                <input type='text' name='city' value={details.city} onChange={handleChange} />
                            </label>

                        </div>
                        <input type='submit' value={update} />
                    </form>
                </div>


                <div className='table-data'>

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




            </div>
        </div>

    )
}

export default Form

