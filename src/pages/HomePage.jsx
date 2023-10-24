/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components';
import { useEffect } from 'react';

import MainSections from '../components/MainSections';

import { useThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars

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

  // if (!words || words.length === 0) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <Wrapper>
      <section className="section-hero">
        <div className="hero-wrapper">
          <Header />
        </div>
      </section>

      <MainSections />

      {/* <div className="period"></div> */}
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section-hero {
    /* border-top: 4px solid rgba(255, 255, 255, 0.432); */
    margin: 0 auto;
  }

  .hero-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420px;
    width: 70vw;
    overflow: hidden;
    margin: 8rem auto;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  .header {
    height: 100%;
    width: 70%;
    background-color: var(--con-bg-1);
    padding: 2rem;
    letter-spacing: 1px;
    line-height: 1;
    color: #fff;
    font-size: 30px;
  }

  .main-header {
    font-size: 65px;
    font-weight: 400;
    /* font-family: 'DM Serif Display', serif; */
    line-height: 5rem;
    color: #000;
  }

  .main-header.dark-theme {
    color: #fff;
  }

  .header-p {
    margin-bottom: 6rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    padding-right: 4rem;
    font-size: 18px;
    color: #000;
  }
  .header-p.dark-theme {
    color: #fff;
  }
  .hero-img {
    width: 30%;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1450px) {
    .hero-img {
      width: 40%;
    }
  }
  @media screen and (max-width: 930px) {
    .section-hero {
      width: 100vw;
    }
    .hero-wrapper {
      width: 100%;
    }
  }
  @media screen and (max-width: 820px) {
    .main-header {
      font-size: 40px;
    }
    .sub-header-change,
    .sub-header {
      font-size: 30px;
    }
    .sub-header-change {
      left: 9rem;
    }
  }
  @media screen and (max-width: 750px) {
    .header-p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 650px) {
    .section-hero {
      min-height: 15vh;
    }
    .header-p {
      font-size: 15px;
      margin-bottom: 2rem;
    }
    .hero-img {
      display: none;
    }
    .header {
      width: 100%;
    }
  }
`;

export default HomePage;
