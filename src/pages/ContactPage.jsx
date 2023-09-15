/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components';
import Footer from '../components/Footer';
import image from '../public/about-images/image-1.png';
import { social } from '../data';

const ContactPage = () => {
  return (
    <Wrapper>
      <section className="contact-section">
        <div className="section-wrapper">
          <div className="get-in-touch">
            <h1 className="get-in-touch-h theme-text">Get in touch</h1>
            <p className="get-in-touch-p theme-text">
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </p>
            <form action="" className="contact-form">
              <h4 className="form-h theme-text">about you</h4>
              <div className="input-wrap">
                <label htmlFor="" className="theme-text">
                  Your name
                </label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label htmlFor="" className="theme-text">
                  Email
                </label>
                <input type="email" />
              </div>

              <div className="input-wrap">
                <label htmlFor="" className="theme-text">
                  Message
                </label>
                <textarea type="text" />
              </div>
              <button className="main-button btn-size-two">Send</button>
            </form>
          </div>

          <div className="contact-about">
            <h3 className=" theme-text">About Danny Bogatko</h3>
            <div>
              <img src={image} alt="danny bogatko" className="about-img" />
              <p className="contact-about-p theme-text">
                Innovation and technology, powered by JavaScript/ES6, Python,
                HTML5, and CSS3, create modern web experiences. Node.js,
                Express, and MongoDB deliver robust backends. React,
                React-Router, and Styled-Components craft dynamic frontends.
              </p>

              <p className="contact-about-mail theme-text">
                Email: <a href="">bogatkodaniel@gmail.com</a>
              </p>

              <div className="social-contact">
                {social.map((item) => {
                  console.log(item);
                  return (
                    <li key={item.id}>
                      <a href="" className="theme-text">
                        {<item.icon />}
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  overflow-x: hidden;
  .contact-section {
    max-width: 1620px;
    width: 70vw;
    margin: 8rem auto;
    /* overflow: hidden; */
  }
  .section-wrapper {
    display: flex;
    justify-content: space-between;
  }

  /* Get in touch and form */

  .get-in-touch {
    padding-right: 10rem;
    p {
      margin-bottom: 2rem;
    }
  }

  .contact-form {
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 5px;
    background-color: rgba(205, 205, 205, 0.3);
    backdrop-filter: blur(4px);
    h4 {
      margin-bottom: 1rem;
    }
    .input-wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      input {
        font-size: 1.2rem;
        padding: 0.5rem;
      }
      textarea {
        resize: none;
        height: 10rem;
        padding: 0.5rem;
      }
      input:focus {
        outline: none !important;
        border: 1px solid #000;
        box-shadow: 0 0 10px #719ece;
      }
      textarea:focus {
        outline: none !important;
        border: 1px solid #000;
        box-shadow: 0 0 10px #719ece;
      }
    }
    button {
      background: transparent;
      cursor: pointer;
      margin-top: 2rem;
    }
  }

  /* End of get in touch and form */

  /* Contact about */
  .contact-about {
    width: 40%;
    h3 {
      margin-bottom: 2rem;
    }
  }

  .about-img {
    height: 10rem;
    width: 6rem;
    float: left;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .contact-about-p,
  .contact-about-mail {
    margin-bottom: 2rem;
  }

  .contact-about-mail {
    a {
      color: #0015ff;
      text-decoration: revert;
    }
  }
  .contact-about-mail.dark-theme {
    a {
      color: #c300ff;
      text-decoration: revert;
    }
  }

  .social-contact {
    display: flex;
    gap: 1rem;
    a {
      font-size: 2rem;

      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
export default ContactPage;
