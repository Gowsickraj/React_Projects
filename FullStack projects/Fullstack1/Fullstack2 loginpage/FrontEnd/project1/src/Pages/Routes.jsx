import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage'
import ErrorPage from './ErrorPage'
import SignUp from './SignUp'


export const Router = createBrowserRouter([{
    path: "",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "signup",
            element: <SignUp />
        }
    ]
}])

const Routes = () => {




    return (
        <div>

        </div>
    )
}

export default Routes
