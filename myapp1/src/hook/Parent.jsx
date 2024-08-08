import { createContext, useContext } from "react";



export const AppContext = createContext();

export const Parent = () => {

    const name = ['Guru', 'prasath'];



    return (
        <AppContext.Provider value={name}>
            <div>
                {/* <Child /> */}
                <GrandChild1/>
            </div>
        </AppContext.Provider>


    )

}
export const Child = () => {

    return (

        <div>
            <GrandChild />
        </div>
    )

}

export const GrandChild = () => {

    // const value = useContext(AppContext);

    return (

        <div>

            {/* {value} */}
            <GrandChild1 />

        </div>
    )

}

export const GrandChild1 = () => {

    const value = useContext(AppContext);
    console.log(value);
    return (

        <AppContext.Consumer>

            <div>

                {value}

            </div>

        </AppContext.Consumer>
        
    )

}