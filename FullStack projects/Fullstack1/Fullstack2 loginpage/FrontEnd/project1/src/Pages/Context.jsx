import React, { createContext, useState } from 'react'
import {useNavigate} from 'react-router-dom';


export const MyContext = createContext();

export const Context = ({ children }) => {

    const [details, setDetails] = useState({});
    const [error, setError] = useState(false);
    const [login, setLogin] = useState(false);

    // const navi = useNavigate();


    return (
        <div>
            <MyContext.Provider value={
                {
                    details,
                    setDetails,
                    error,
                    setError,
                    login,
                    setLogin,
                    
                }}>
                {children}

            </MyContext.Provider>

        </div>
    )
}

// export default Context
