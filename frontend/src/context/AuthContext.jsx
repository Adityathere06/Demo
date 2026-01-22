import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const UserRole = {
    NGO: 'NGO',
    ADMIN: 'ADMIN',
    CORPORATE: 'CORPORATE'
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage on mount
        const storedUser = localStorage.getItem('carbon_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from local storage", e);
                localStorage.removeItem('carbon_user');
            }
        }
        setLoading(false);
    }, []);

    const login = (email, role) => {
        const newUser = { email, role };
        setUser(newUser);
        localStorage.setItem('carbon_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('carbon_user');
    };

    const value = {
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
