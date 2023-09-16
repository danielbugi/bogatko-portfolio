import { styled } from 'styled-components';

import { projectList } from '../data';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';
import TechMini from '../components/TechMini';

const ProjectsPage = () => {
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
      <section className="project-section">
        <div className="projects-wrapper">
          {projectList.map((project) => {
            const { title, img, id, techs, url, githubUrl, text } = project;
            return (
              <article className="project-main" key={id}>
                <div className="project-main-inner">
                  <div className="project-img">
                    <img src={img} alt="" />

                    <div className="project-main-content theme-selector">
                      <h4 className="project-title">{title}</h4>

                      <TechMini techs={techs} />

                      <p>{text}</p>

                      <div className="projects-buttons">
                        <Link
                          to={url}
                          className="main-button btn-size-two theme-selector"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website Demo
                        </Link>
                        <Link
                          to={githubUrl}
                          className="main-button btn-size-two theme-selector"
                          target="_blank"
                          rel="noreferrer"
                        >
                          github
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;

  .project-section {
    /* background: #fff; */
    max-width: 1620px;
    width: 70vw;
    margin: 8rem auto;
    overflow: hidden;
  }
  .projects-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project-main {
    height: 45vh;
    width: 33vw;
    margin: 1rem;
    /* transition: all 0.3s ease-in-out; */
    /* padding: 2rem; */
  }

  .project-main:nth-of-type(3),
  .project-main:nth-of-type(5) {
    width: 16vw;
  }

  .project-main-inner {
    height: 100%;
    width: 100%;
    position: relative;
  }

  /* flex-grow: 4  .project-main:nth-of-type(4) {
    ;
  } */

  .project-img {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: -1; */
    /* filter: grayscale(100%); */
    border-radius: 5px;
    img {
      object-fit: cover;
      width: 100%;
      /* object-position: center; */
      height: 100%;
    }
  }
  /* .background-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(179, 179, 179);
    background: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  } */

  .project-main-content {
    position: absolute;
    bottom: -100%;
    left: -100%;
    background: rgba(206, 214, 230, 0.399);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* z-index: 2; */
    /* transition: all 0.5s ease-in-out; */
    /* z-index: 10; */
  }

  .projects-buttons {
    width: 100%;

    a {
      display: inline-block;
      margin-right: 1rem;
    }
  }

  .project-main-content.dark-theme {
    background: rgba(0, 14, 39, 0.671);
  }

  .project-main:hover {
    box-shadow: var(--box-shadow);
  }
  /* .project-main:hover .project-img {
    filter: none;
  } */
  .project-main:hover .project-main-content {
    bottom: 0;
    left: 0;
  }
`;
export default ProjectsPage;
