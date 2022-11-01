import React from 'react';
import {useParams,useNavigate} from "react-router-dom";

function Person(props) {

    const {personId} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            Person with id {personId}
            <button onClick={() => {
                navigate("/")
            }}>HOME
            </button>
        </div>
    );
}

export default Person;