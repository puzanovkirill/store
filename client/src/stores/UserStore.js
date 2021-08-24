import {createContext, useContext, useMemo, useState} from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] =  useState();
    const contextValue = useMemo(
        () => [user, setUser],
        [user, setUser],
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    return useContext(UserContext);
}

export default  UserProvider;