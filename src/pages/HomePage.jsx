/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { animatedHeader } from '../data';
import bogatkoImg from '../public/IMG_1351-min.jpg';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import MainSections from '../components/MainSections';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [words, setWords] = useState(animatedHeader);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex + 1) % words.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentIndex]);

  // if (!words || words.length === 0) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <Wrapper>
      <section className="section-hero">
        <div className="header">
          <h2 className="main-header theme-text">Hello, there!</h2>

          <SubHeader words={words} currentIndex={currentIndex} />

          <p className="header-p theme-text">
            My name is Danny Bogatko and I'm web developer and programmer.
          </p>
          <Link to="/projects" className="main-button btn-size-one">
            See my projects
          </Link>
        </div>
        <div className="hero-img">
          <img src={bogatkoImg} alt="danny-bogatko" className="person-img" />
        </div>
      </section>

      <MainSections />

      <div className="period"></div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;
  .section-hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420px;
    width: 70vw;
    overflow: hidden;
    margin: 8rem auto;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.3);
    /* border-top: 4px solid rgba(255, 255, 255, 0.432); */
  }
  .header {
    height: 100%;
    width: 70%;
    background-color: rgba(205, 205, 205, 0.3);
    /* backdrop-filter: sepia(10%); */
    /* border: 5px solid rgba(255, 255, 255, 0.088); */
    padding: 2rem;
    letter-spacing: 1px;
    line-height: 1;
    color: #fff;
    font-size: 30px;
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
  }
  .hero-img {
    width: 30%;
    img {
      /* height: 100%; */
      width: 100%;

      object-fit: contain;
    }
  }
`;

export default HomePage;
