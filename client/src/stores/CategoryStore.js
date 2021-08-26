
import {createContext, useContext, useMemo, useState} from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] =  useState();
    const contextValue = useMemo(
        () => [category, setCategory],
        [category, setCategory],
    );

    return (
        <CategoryContext.Provider value={contextValue}>
            {children}
        </CategoryContext.Provider>
    );
};

export function useCategory() {
    return useContext(CategoryContext);
}

export default  CategoryProvider;