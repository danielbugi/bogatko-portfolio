/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components';

import image from '../public/about-images/image-1.png';
import { techList } from '../data';
import { useThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';

const AboutPage = () => {
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
      <section className="section-about-main">
        <div className="about-one-sec">
          <div>
            <img className="person-img" src={image} alt="danny bogatko" />
          </div>
          <div className="text-1-container">
            <h2 className="about-header theme-selector">About danny bogatko</h2>
            <p className="paragraph theme-selector">
              I'm Danny Bogatko, a freelance web developer and programmer
              located in the vibrant city of Ramat-Gan, Israel. My professional
              journey has been quite diverse. In the past, I worked as a
              salesperson, gaining valuable experience in the insurance and real
              estate industries. This experience taught me the importance of
              effective communication and building strong client relationships.
            </p>

            <p className="paragraph theme-selector">
              In addition to my tech-savvy side, I have a deep understanding of
              the financial market, particularly in the realm of
              cryptocurrencies and investments. I approach investment
              opportunities with a strategic mindset, always on the lookout for
              potential growth and profit. Combining my sales experience,
              creative spirit, and financial knowledge, I'm committed to
              delivering exceptional web solutions while embracing new
              opportunities in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
        <div className="about-two-sec">
          <div className="text-2-container">
            <p className="paragraph-two theme-selector">
              Innovation and technology, powered by JavaScript/ES6, Python,
              HTML5, and CSS3, create modern web experiences. Node.js, Express,
              and MongoDB deliver robust backends. React, React-Router, and
              Styled-Components craft dynamic frontends. Axios and Firebase
              streamline data interactions. Github ensures collaboration and
              version control. These tools shape the digital landscape.
            </p>
            <p className="paragraph-two theme-selector">
              The ability to develop frontend, backend, and full-stack
              applications is a valuable skill set. Frontend developers create
              engaging user interfaces using HTML, CSS, and JavaScript, while
              backend developers build server-side logic and databases with
              tools like Node.js, Express, and MongoDB. Full-stack developers
              possess a well-rounded expertise, capable of designing end-to-end
              solutions that seamlessly integrate both frontend and backend
              components, ensuring a cohesive and efficient user experience.
              This versatility empowers developers to tackle a wide range of
              projects and contribute significantly to the world of technology.
            </p>
          </div>
          <div className="tech-box">
            <div className="tech-skills">
              <h4 className="tech-header theme-selector">skills</h4>
              {techList.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt="tech" className="tech-icon" />
                    <span className="tech-text theme-selector">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </div>
            <div className="tech-box-note">
              <p className="p-note theme-selector">
                This is the list of the main program languages and development
                skills. I'm also familiar with many more tools and libraries
                that fall under the main categories. If you want know more,{' '}
                <a href="bogatkodaniel@gmail.com" className="theme-selector">
                  contact here!
                </a>
              </p>
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
  .section-about-main {
    /* background: #fff; */

    margin: 8rem auto;
    overflow: hidden;
    width: 70vw;
    max-width: 1620px;
    padding: 0 4rem;
  }
  .about-one-sec {
    margin-bottom: 5rem;
  }
  .about-header {
    padding-left: 25rem;
    margin-bottom: 2rem;
  }
  .paragraph {
    color: #000000;
    margin-bottom: 2rem;
    padding-left: 25rem;
  }
  .paragraph.dark-theme {
    color: #fff;
  }

  .person-img {
    height: 25rem;
    width: 17rem;
    float: left;
  }

  .about-two-sec {
    display: flex;
    justify-content: space-between;
  }

  .paragraph-two {
    display: block;
    margin-bottom: 2rem;
    padding-right: 8rem;
  }

  .tech-box {
    width: 20rem;
    display: flex;
    flex-direction: column;

    .tech-skills {
      padding: 1.5rem;
      width: 20rem;
      background-color: rgba(205, 205, 205, 0.3);
      backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
      align-items: start;

      box-shadow: var(--box-shadow);
      li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .tech-icon {
        height: 45px;
        width: 47px;
        margin-right: 1rem;
      }

      li:nth-of-type(2) > .tech-icon {
        padding: 0 5px;
      }

      .tech-text.dark-theme {
        color: #fff;
      }
      .tech-header {
        margin-bottom: 1rem;
      }
    }

    .p-note {
      font-style: italic;
    }

    .p-note {
      color: #595959;
      a {
        color: #0015ff;
        text-decoration: revert;
      }
    }
    .p-note.dark-theme {
      color: #aeadad;
      a {
        color: #c300ff;
        text-decoration: revert;
      }
    }
  }

  @media screen and (max-width: 1060px) {
    .section-about-main {
      width: 100vw;
    }
  }
  @media screen and (max-width: 800px) {
    .about-header,
    .paragraph {
      padding-left: 0;
    }
    .paragraph {
      font-size: 22px;
      letter-spacing: 0.1rem;
      font-weight: 300;
    }
    .person-img {
      margin-right: 2rem;
      margin-bottom: 1rem;
    }
    .paragraph-two {
      font-size: 22px;
      padding-right: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 300;
    }
    .about-two-sec {
      display: block;
    }
  }

  @media screen and (max-width: 400px) {
    .section-about-main {
      padding: 0 2rem;
    }
    .paragraph,
    .paragraph-two {
      font-size: 16px;
      padding: 0;
    }
    .tech-box {
      display: block;
      width: 80%;
      /* margin: 0 auto; */
    }
  }
`;
export default AboutPage;
