import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', color:'dark' }} src={notfound} alt="" />
            <Link to="/"><button className="btn btn-primary">Go Back</button>
            
            </Link>
        </div>
    );
};

export default NotFound;