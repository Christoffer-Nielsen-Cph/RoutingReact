import React from 'react';

function Contact({name,address}) {
    return (
        <div>
            Contact
            <h3>{name}</h3>
            <p>{address.street}</p>
            <p>{address.town}</p>
            <p>{address.country}</p>
        </div>
    );
}

export default Contact;