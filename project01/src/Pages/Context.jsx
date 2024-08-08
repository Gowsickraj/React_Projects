import React, { createContext, useState } from 'react';


export const AppContext = createContext();

const Context = ({ children }) => {

    const [personalInfo, setPersonalInfo] = useState([]);
    const [info, setInfo] = useState({});
    const [age, setAge] = useState(0);

    return (
        <AppContext.Provider value={
            {
                personalInfo,
                setPersonalInfo,
                info,
                setInfo,
                age,
                setAge
            }

        }>
            {children}
        </AppContext.Provider>
    )
}

export default Context
