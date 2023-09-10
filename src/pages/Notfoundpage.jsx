import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return ( 
        <div>
            <h1>Error <Link to="/">home</Link></h1>
        </div>
     );
}
 
export default Notfound;