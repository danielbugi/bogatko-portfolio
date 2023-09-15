import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkTheme');
  return (
    storedDarkMode === 'true' ||
    window.matchMedia('(prefers-color-scheme:dark)').matches
  );
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
