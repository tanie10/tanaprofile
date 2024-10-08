import React, { createContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = {
    dark: {
      backgroundColor: '#222',
      textColor: '#fff',
     
    },
    light: {
      backgroundColor: '#fff',
      textColor: '#333',
    },
  };

  return (
    <ColorContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };

/* To Use this component*/