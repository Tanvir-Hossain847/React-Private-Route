import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {

    const authinfo = use(AuthContext);
    console.log(authinfo);
    

    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;