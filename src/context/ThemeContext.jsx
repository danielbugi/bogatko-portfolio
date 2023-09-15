import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

  return storedDarkMode || prefersDarkMode;
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    const gradient = document.querySelector('.gradient');
    const background = document.querySelector('.background');
    const backgroundBlur = document.querySelector('.background-blur');
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');

    const text = document.querySelectorAll('.theme-text');
    const themeItem = document.querySelectorAll('.theme-item');
    const mainButtons = document.querySelectorAll('.main-button');
    const navLinks = document.querySelectorAll('.nav-links');

    text.forEach((el) => {
      el.classList.toggle('dark-theme', isDarkTheme);
    });
    themeItem.forEach((el) => {
      el.classList.toggle('dark-theme', isDarkTheme);
    });
    mainButtons.forEach((el) => {
      el.classList.toggle('dark-theme', isDarkTheme);
    });
    navLinks.forEach((el) => {
      el.classList.toggle('dark-theme', isDarkTheme);
    });

    gradient.classList.toggle('dark-theme', isDarkTheme);
    background.classList.toggle('dark-theme', isDarkTheme);
    backgroundBlur.classList.toggle('dark-theme', isDarkTheme);
    navbar.classList.toggle('dark-theme', isDarkTheme);
    footer.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

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
