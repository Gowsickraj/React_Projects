import React, { useContext } from 'react';
import './Details.css';
import { AppContext } from './Context';

const Details = ({ data }) => {

    const{personalInfo,setPersonalInfo} = useContext(AppContext);

    // console.log(personalInfo,"Appcontext");


    const updateData = (index) => {

        console.log(index, " index ");
        const currentArray = personalInfo.at(index);
        console.log(currentArray);


    }

    const deleteData = () => {


    }


    // console.log(data, "details");

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Date of Birth</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>

                </thead>

                <tbody>


                    {data.length > 0 && data.map((item, index) => (

                        <tr key={index}>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.dateofbirth}</td>
                            <td>{item.mobilenumber}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={()=>updateData(index)}>Update</button>
                            </td>
                            <td>
                                <button onClick={deleteData}>Delete</button>
                            </td>

                        </tr>

                    ))}


                </tbody>

            </table>

        </div>
    )
}

export default Details
