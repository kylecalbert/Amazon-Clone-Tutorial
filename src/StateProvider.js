//setup datalayer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// this is the DATA LAYER
export const StateContext = createContext();

// this is the PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we USE IT in a component
export const useStateValue = () => useContext(StateContext); 