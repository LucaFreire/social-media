import React from "react";


export const jwtContext = React.createContext();
jwtContext.displayName = 'jwt';

export const jwtProvider = ({ children }) => {

    const jwt = sessionStorage.getItem('token');

    return (
        <jwtContext.Provider
            value={{ jwt }}
        >
            {children}
        </jwtContext.Provider>
    );
};