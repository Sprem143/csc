import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminProtector(){
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = localStorage.getItem('adminToken');
    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setIsAuthenticated(false);
                return;
            }
            try {
                let result = await fetch("https://cp-frontend-o29c.onrender.com//admin/verifyToken", {
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
    return isAuthenticated ? <Outlet/> : <Navigate to="/adminlogin" />;
};

