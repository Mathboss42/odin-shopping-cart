import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/store' element={<Store />}>
                    {/* <Route path='./cart' /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;