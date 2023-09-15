import styled from 'styled-components';
import { links } from '../data';
// import { FaInstagram } from 'react-icons/fa';
import logo from '../public/logo.png';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          <h1 className="theme-text">DB Digital</h1>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { text, url, id } = link;
            return (
              <li key={id}>
                <a href={url} className="nav-link theme-text">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <DarkModeSwitch />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-wrapper {
    /* border-bottom: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    .logo {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      img {
        height: 1.5rem;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
    }

    ul li {
      list-style: none;
      margin: 0 20px;
      transition: 0.5s;
    }

    .nav-link {
      display: block;
      position: relative;
      text-decoration: none;
      padding: 5px;
      font-size: 18px;
      font-family: sans-serif;
      color: #000000;
      text-transform: capitalize;
      transition: 0.5s;
    }
    .nav-links .dark-theme {
      color: #fff;
    }

    ul:hover li a {
      /* transform: scale(1.2); */
      opacity: 0.8;
      filter: blur(3px);
    }

    ul li a:hover {
      /* transform: scale(1.2); */
      opacity: 1;
      filter: blur(0);
      text-decoration: none;
    }

    ul li a:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: #000000;
      transition: 0.5s;
      transform-origin: right;
      transform: scaleX(0);
      z-index: -1;
    }

    ul li .dark-theme:before {
      background: #ffffff;
    }

    ul li a:hover:before {
      transition: transform 0.5s;
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;
export default Navbar;
