import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Mobile from './Mobile';
import './Product.css';

const Products = () => {
  const clicked = (event) => {
    console.log(event.target.value);
  }

  const[product,setProduct] = useState([])

  const handleInputChange = (event)=>{
    setProduct(event.target.value);

  }

  return (
    <div>
      <h1 onClick={clicked}>Products</h1>
      <form>
        <label for='product'>Enter a Product name:</label>
        <input type='text' id='product' onClick={clicked} onChange={handleInputChange} />
        <p>we are selling <b>{product} </b>here </p>

      </form>
      
      <Mobile />


    </div>
  )
}

export default Products
