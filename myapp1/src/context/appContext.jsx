import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


export const MyContext = React.createContext();

const AppContext = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       setData(response.data); ``
  //       setLoading(false);
  //     })

  // }, [])

  return (
    <MyContext.Provider value={
      {
        data,
        setData,
        loading,
        setLoading
      }

    }>

      {children}
    </MyContext.Provider>



  );
}

export default AppContext
