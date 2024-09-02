import React, { createContext, useState } from 'react'


export const MyContext = createContext();

export const Context = ({ children }) => {

    const [details, setDetails] = useState({});
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);


    return (
        <div>
            <MyContext.Provider value={
                {
                    details,
                    setDetails,
                    error,
                    setError,
                    login,
                    setLogin
                }}>
                {children}

            </MyContext.Provider>

        </div>
    )
}

// export default Context
