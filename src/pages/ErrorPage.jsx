import { styled } from 'styled-components';
import errorImg from '../public/error.png';
import { useThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';

const ErrorPage = () => {
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
      <section className="error-page">
        <div className="error-wrapper">
          <div className="error-header">
            <h2 className="error-main-header theme-text">
              404, Page not found!
            </h2>

            <p className="error-header-p theme-text">
              Sorry, The requested page has not found!
            </p>
            <a href="/" className="main-button btn-size-one">
              Go to home page
            </a>
          </div>
          <div className="error-hero-img">
            <img src={errorImg} alt="danny-bogatko" className="person-img" />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;
  .error-page {
    height: 70vh;
    width: 70vw;
    margin: 0 auto;
    margin-top: 8rem;
  }
  .error-wrapper {
    display: flex;
    justify-content: space-between;
    background-color: rgba(205, 205, 205, 0.3);
    /* backdrop-filter: sepia(10%); */
    /* border: 5px solid rgba(255, 255, 255, 0.088); */
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
  }

  .error-header {
    height: 20rem;

    letter-spacing: 1px;
    line-height: 1;
    color: #fff;
    font-size: 30px;
    .error-main-header {
      font-size: 65px;
      font-weight: 400;
      /* font-family: 'DM Serif Display', serif; */
      line-height: 5rem;
      color: #000;
    }

    .error-main-header.dark-theme {
      color: #fff;
    }

    .error-header-p {
      margin-bottom: 6rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
      padding-right: 4rem;
      font-size: 18px;
      color: #000;
    }
    .error-header-p.dark-theme {
      color: #fff;
    }
  }
  .error-hero-img {
    width: 30%;
    img {
      /* height: 100%; */
      width: 100%;

      object-fit: contain;
    }
  }
`;
export default ErrorPage;
