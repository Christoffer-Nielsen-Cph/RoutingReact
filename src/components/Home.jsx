import React from 'react';
import {Link, Outlet} from "react-router-dom";


function Home(props) {
    return (
        <div>
            <h3>Home</h3>
            <Link to="/person">Show a person</Link>
            <Outlet/>
        </div>
    );
}

export default Home;