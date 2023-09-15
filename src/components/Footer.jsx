import { styled } from 'styled-components';
import logo from '../public/logo.png';
import { links, social } from '../data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-wrapper">
        <div className="reserved-box">
          <div className="logo">
            <img src={logo} alt="" />
            <h1 className="theme-text">DB Digital</h1>
          </div>
          <div className="reserved-des">
            <p className="theme-text">
              Built by <span>Danny Bogatko.</span>
            </p>
            <p className="theme-text">
              Powered by <span>Danny Bogatko.</span>
            </p>
          </div>

          <p className="theme-text">&copy; 2023. All Rights Reserved.</p>
        </div>

        <div className="links">
          <h5 className="text footer-link-header">Website</h5>
          {links.map((link) => {
            const { text, url, id } = link;
            return (
              <li key={id}>
                <Link to={url} className="theme-text">
                  {text}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="social">
          <h5 className="theme-text footer-link-header">Get in touch</h5>
          {social.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="theme-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{<link.icon />}</span> {link.text}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer-wrapper {
    width: 70vw;
    height: 100%;
    margin: 0 auto;
    padding: 2.5rem 0;
    display: grid;
    grid-template-columns: 1fr 0.2fr 0.2fr;
    .reserved-box {
      .logo {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        height: 1.5rem;
        margin-bottom: 1rem;
        img {
          height: 1.5rem;
        }
      }
      .reserved-des {
        margin-bottom: 1rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        span {
          color: #aeadad;
        }
      }
    }
    .links {
      h5 {
        margin-bottom: 1rem;
        color: #aeadad;
      }
      li {
        padding: 0.2rem 0;
        font-size: 0.9rem;
      }
    }
    .social {
      h5 {
        margin-bottom: 1rem;
        color: #aeadad;
      }
      li {
        padding: 0.2rem 0;
        font-size: 0.9rem;
      }
    }
  }
`;

export default Footer;
