/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components';

import image from '../public/about-images/image-1.png';
import { social } from '../data';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import axios from 'axios';

const ContactPage = () => {
  const { isDarkTheme } = useThemeContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    try {
      const response = await axios.post(
        'https://backend-dbdigital.onrender.com/api/createMessage',
        newMessage
      );
      if (response.status === 200) {
        alert('Message was sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (err) {
      if (err) {
        alert('Something went wrong, try again later.');
      }
    }
  };

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
      <section className="contact-section">
        <div className="section-wrapper">
          <div className="get-in-touch">
            <h1 className="get-in-touch-h theme-selector">Get in touch</h1>
            <p className="get-in-touch-p theme-selector">
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4 className="form-h theme-selector">about you</h4>
              <div className="input-wrap">
                <label htmlFor="" className="theme-selector">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="input-wrap">
                <label htmlFor="" className="theme-selector">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="input-wrap">
                <label htmlFor="" className="theme-selector">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="main-button btn-size-two theme-selector"
              >
                Send
              </button>
            </form>
          </div>

          <div className="contact-about">
            <div className="contact-about-wrapper">
              <h3 className=" theme-selector">About Danny Bogatko</h3>
              <div className="hor-wrapper">
                <img src={image} alt="danny bogatko" className="about-img" />
                <p className="contact-about-p theme-selector">
                  Innovation and technology, powered by JavaScript/ES6, Python,
                  HTML5, and CSS3, create modern web experiences. Node.js,
                  Express, and MongoDB deliver robust backends. React,
                  React-Router, and Styled-Components craft dynamic frontends.
                </p>
              </div>

              <p className="contact-about-mail theme-selector">
                Email: <a href="">bogatkodaniel@gmail.com</a>
              </p>
            </div>

            <div className="social-contact">
              {social.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="theme-selector"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {<item.icon />}
                    </a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
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
    h1 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }

  .contact-form {
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--con-bg-1);
    backdrop-filter: blur(4px);
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.3);
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
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--con-bg-1);
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    h3 {
      margin-bottom: 2rem;
    }
  }

  .contact-about-wrapper {
    display: flex;
    flex-direction: column;
  }

  .about-img {
    height: 10rem;
    width: 6.5rem;
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

  .contact-about-mail.dark-theme a {
    color: #c300ff;
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

  @media screen and (max-width: 800px) {
    .contact-section {
      width: 100vw;
      padding: 0 2rem;
    }
    .section-wrapper {
      flex-direction: column-reverse;
    }
    .contact-about {
      width: 100%;
      margin-bottom: 2rem;
    }
    .get-in-touch {
      width: 100%;
      padding: 0;
    }
  }
`;
export default ContactPage;
