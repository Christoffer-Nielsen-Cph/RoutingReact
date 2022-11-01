import React from 'react';
import {getPersons} from "../data.js";
import {Link, Outlet,useSearchParams} from "react-router-dom";

function PersonList(props) {

    const persons = getPersons();
    const searchObj = useSearchParams();

    return (

        <nav>
            {
                persons.map(person =>
                    <Link
                        style={{display: "block",margin: "1rem 0"}}
                        to={`/person/${person.id}`}
                        key={person.id}
                    >
                        {person.name}
                    </Link>
                )

            }
            <Outlet/>
        </nav>

    );
}

export default PersonList;