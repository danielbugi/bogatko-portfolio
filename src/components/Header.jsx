/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import { useEffect, useState } from 'react';
import { animatedHeader } from '../data';
import bogatkoImg from '../public/IMG_1351-min.jpg';

const Header = () => {
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

  return (
    <>
      <div className="header">
        <h2 className="main-header theme-selector">Hello, there!</h2>

        <SubHeader words={words} currentIndex={currentIndex} />

        <p className="header-p theme-selector">
          My name is Danny Bogatko and I'm web developer and programmer.
        </p>
        <Link
          to="/projects"
          className="main-button btn-size-one theme-selector"
        >
          See my projects
        </Link>
      </div>
      <div className="hero-img">
        <img src={bogatkoImg} alt="danny-bogatko" className="person-img" />
      </div>
    </>
  );
};
export default Header;
