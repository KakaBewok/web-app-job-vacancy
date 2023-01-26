import { FaMoon, FaSun } from 'react-icons/fa';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Cookies from 'js-cookie';

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  return (
    <p onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</p>
  );
};

export default ToggleTheme;
