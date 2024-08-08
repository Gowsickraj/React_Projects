import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

  return (
    <div>
        <h1>404 not found</h1>
        <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorPage
