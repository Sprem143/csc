import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute(){
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = localStorage.getItem('authToken');
    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setIsAuthenticated(false);
                return;
            }
            try {
                let result = await fetch("http://localhost:5000/auth/verifyToken", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                result= await result.json();
              console.log(result.auth)
                if (result.auth) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Token verification failed:', error);
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, [token]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Optionally show a loading state while verifying
    }
    return isAuthenticated ? <Outlet/> : <Navigate to="/admin" />;
};

