import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Index } from './Pages/Home';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
        </Routes>
    )
}

