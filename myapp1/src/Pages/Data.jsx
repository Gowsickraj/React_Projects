import React, { useContext } from 'react'
import { MyContext } from '../context/appContext';
import './Data.css'

const Data = () => {

    const { data, setData } = useContext(MyContext);
    const { loading, setLoading } = useContext(MyContext);

    return (
        <div>
            <table>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>

                {data.map((value) => (
                    <tr key={value.id}>
                        <td>{value.userId}</td>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Data
