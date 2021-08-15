import React, { useState, useContext, createContext } from "react";

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export enum Authenticated {
  Admin = 2,
  In = 1,
  Out = 0,
}

export interface AppContextType {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
  isLoggedIn: Authenticated;
  setIsLoggedIn: (Authenticate: Authenticated) => void;
}

export const AppContext = createContext<AppContextType>({ 
  theme: Theme.Dark, 
  setTheme: (theme: Theme) => console.warn('no theme provider'),
  isLoggedIn: Authenticated.Out,
  setIsLoggedIn: (n: number) => console.log(n)
});
export const getContext = () => useContext(AppContext);