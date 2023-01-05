import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routers from '../router/index';

const AppRouter = () => {
    return (
        <Routes>
            {
                routers.map(route => 
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        exact={route.exact}
                        key={route.path}
                    />
                )
            }
        </Routes>
    )
}

export default AppRouter;