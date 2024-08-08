import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/appContext';


const Mobile = () => {

  const {data,setData} = useContext(MyContext);
  const {loading,setLoading} = useContext(MyContext);


  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data => setData([])), setLoading(false));

  // }, [])


  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response)=>{
  //     setData(response.data);
  //     setLoading(false);
  //   })

  // },[loading])



  // console.log(loading)
  // console.log(data);

  // const userData = {
  //   'body': "123",
  //   'id': 101,
  //   'title': "456",
  //   'userId': 101
  // }
  // const saveData = fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(userData)
  // });
  console.log(data);


  axios.post('https://jsonplaceholder.typicode.com/posts',{
    title:123,
    body:456
  }).then((response)=>{
    console.log("success")
  })


  return (
    
    <div>
      <h2>Mobiles</h2>

      {loading && <p style={{textAlign:"center"}}>Loading...</p>}
      <ol>
{data.length && !loading? data.map((value) => (<li key={value.id}>{value.title}</li>)) : <p>No data found</p>}
      </ol>

      <h4><Link to='/data'>Full Data</Link></h4>

    </div>
  )
}

export default Mobile
