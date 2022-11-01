import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Search from "./components/Search.jsx";
import PersonList from "./components/PersonList.jsx";
import Person from "./components/Person.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="person" element={<PersonList/>}>
                        <Route path=":personId" element={<Person/>}/>
                    </Route>
                </Route>
                <Route path="search" element={<Search/>}/>
                <Route path="contact" element={<Contact
                    name={"Christoffer"}
                    address={{street: "Sct. Jacobsvej 8A 2.tv", town: "Ballerup", country: "Denmark"}}/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>

        </BrowserRouter>
    </React.StrictMode>
)
