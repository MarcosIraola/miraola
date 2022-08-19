import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p onClick={() => navigate(-1)}>Go Back</p>
        </div>
    )
}

export default PageNotFound