import React from 'react';

export const TeamContext = React.createContext();

// Dados dos times cadastrados disponíveis para todos os componentes

export const TeamStorage = ({ children }) => {
    const [team, setTeam] = React.useState([]);

    return (
        <TeamContext.Provider value={{ team, setTeam }}>
            {children}
        </TeamContext.Provider>
    )
}
