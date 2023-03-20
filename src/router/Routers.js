import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom';

import Home from './../pages/Home'
import Login from '../pages/Login';
import Tours from "../pages/Tours";
import SearchResultList from "../pages/SearchResultList";
import Register from "../pages/Register";
import TourDetails from "../pages/TourDetails";


const Routers = () => {

    return(
        <>
{/* <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/home"/>}/>
    </Routes>
    <Routes>
    <Route path="/home"element={<Home/>}/>
    </Routes>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
    <Route path="/tours" element={<Tours/>}/>
    </Routes>
    <Routes>
    <Route path="/tours/search" element={<SearchResultList/>}/>
    </Routes>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    <Routes>
    <Route path="/tours/:id" element={<TourDetails/>}/>
    </Routes>
</Router> */}
<Routes>
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/tours" element={<Tours />}/>
    <Route path="/tours/:id" element={<TourDetails />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/tour/search" element={<SearchResultList />}/>
</Routes>
</>
    )

}

export default Routers;