 
import {createBrowserRouter} from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';
import NavBar from './NavBar';
import Form from './Form';


export const routes = createBrowserRouter([{
    path:'/',
    element:<NavBar/>,
    errorElement:<ErrorPage />,
    children:[
        {
            path:"/form",
            element: <Form />
        },
        {
            path:'/home',
            element:<Home/>
        }
    ]
}])