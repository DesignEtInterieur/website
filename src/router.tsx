
import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import { EcranPrincipal } from './presentation';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/fr" replace />
    },
    {
        path: "/:lang",
        element: <EcranPrincipal />
    },
    {
        path: "/:lang/projects",
        element: <span>projets</span>
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
])