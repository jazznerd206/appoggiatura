import React, { useState, createContext } from "react";
 
// Create Context Object
export const AppContext = createContext({
    state: null,
    dispatch: null,
});
 
// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = (props: object) => {
  const [token, setToken] = useState(0);
 
  return AppContextProvider;
};