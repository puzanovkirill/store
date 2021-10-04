import { createContext, useContext, useMemo, useState } from 'react';

const CurrentBrand = createContext(undefined);

export const CurrentBrandProvider = ({ children }) => {
    const [currentBrand, setCurrentBrand] = useState(undefined);
    const contextValue = useMemo(
        () => [currentBrand, setCurrentBrand],
        [currentBrand, setCurrentBrand]
    );

    return (
        <CurrentBrand.Provider value={contextValue}>
            {children}
        </CurrentBrand.Provider>
    );
};

export function useCurrentBrand() {
    return useContext(CurrentBrand);
}

export default CurrentBrandProvider;
