import React from 'react';

export const TeamContext = React.createContext();

export const TeamStorage = ({ children }) => {
    const [team, setTeam] = React.useState([{ name: "Teste", description: "Teste", website: "Teste", teamType: "fantasy", tags: ["teste1", "teste2"] }]);

    return (
        <TeamContext.Provider value={{ team, setTeam }}>
            {children}
        </TeamContext.Provider>
    )
}
