import { createContext, useContext, useMemo, useState } from 'react';

const CurrentCategory = createContext({id: undefined});

export const CurrentCategoryProvider = ({ children }) => {
    const [currentCategory, setCurrentCategory] = useState({id:undefined});
    const contextValue = useMemo(
        () => [currentCategory, setCurrentCategory],
        [currentCategory, setCurrentCategory]
    );

    return (
        <CurrentCategory.Provider value={contextValue}>
            {children}
        </CurrentCategory.Provider>
    );
};

export function useCurrentCategory() {
    return useContext(CurrentCategory);
}

export default CurrentCategoryProvider;
