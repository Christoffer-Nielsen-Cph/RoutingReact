import React from 'react';

function Login(props) {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;