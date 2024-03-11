'use client'
import {createContext, useState, ReactNode} from 'react';
export const messageData = createContext(null);
function context({children}: { children: ReactNode }){
    const [popup, setPopup] = useState(0);
    const value = { popup, setPopup };
    return (
        <messageData.Provider value={value}>
            {children}
        </messageData.Provider>
    )
}

export default context;