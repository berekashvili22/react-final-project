import { useState } from 'react';
import React from 'react';
import { API_SERVICE } from '../services/api';

export const TranslateProvider = React.createContext(null);

function TranslateProviderComponent({ children }) {
    const TranslateText = async (text, from, to) => {
        const result = await API_SERVICE.Translate(text, from, to);
        if (result) return result;
        else return false;
    };

    return (
        <TranslateProvider.Provider
            className=""
            value={{
                TranslateText
            }}>
            {children}
        </TranslateProvider.Provider>
    );
}

export default TranslateProviderComponent;
