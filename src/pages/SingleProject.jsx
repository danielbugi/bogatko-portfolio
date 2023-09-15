import { styled } from 'styled-components';

import { useThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';

const SingleProject = () => {
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const darkTheme = document.querySelectorAll('.theme-selector');

    darkTheme.forEach((el) => {
      if (isDarkTheme) {
        el.classList.add('dark-theme');
      } else {
        el.classList.remove('dark-theme');
      }
    });
  }, [isDarkTheme]);

  return (
    <Wrapper>
      <section className="single-project-page"></section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;
export default SingleProject;
