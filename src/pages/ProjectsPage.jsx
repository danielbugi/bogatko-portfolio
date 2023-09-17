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
                  </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
  }

  .project-main {
    height: 45vh;
    width: 33vw;
    margin: 1rem;
    position: relative;
    overflow: hidden;
  }

  /* .project-main:nth-of-type(3),
  .project-main:nth-of-type(5) {
    width: 16vw;
  } */

  .project-main-inner {
    height: 100%;
    width: 100%;
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

    border-radius: 5px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .project-main-content {
    position: absolute;
    bottom: -100%;
    left: -100%;
    background: rgba(206, 214, 230, 0.399);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    border-radius: 5px;
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

  @media screen and (max-width: 800px) {
    .project-section {
      width: 100vw;
      padding: 0 2rem;
    }
    .projects-wrapper {
      grid-template-columns: 1fr;
    }
    .project-main {
      height: 22vh;
      width: 90%;
    }
    .project-main-inner {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .project-main-content {
      position: static;
      border-radius: 0 0 5px 5px;
      p {
        display: none;
      }
    }
    .project-img {
      position: static;
    }
  }

  @media screen and (max-width: 420px) {
    .project-title {
      font-size: 12px;
      margin-bottom: 0.5rem;
    }
    .main-button {
      font-size: 16px;
    }
    .project-img {
      height: 20rem;
    }
  }
`;
export default ProjectsPage;
