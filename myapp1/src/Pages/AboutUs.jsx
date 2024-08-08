import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/appContext';

const AboutUs = () => {


  const {data,setData} = useContext(MyContext);
  const {loading,setLoading} = useContext(MyContext);
  console.log(data);

  return (
    <div>
      <h1>About us</h1>
      <Link to="/">Home</Link>

      <ol>
      {data.map((value)=><li key={value.id}>{value.title}</li>)}

      </ol>
    </div>
  )
}

export default AboutUs
