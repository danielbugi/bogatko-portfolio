import { styled } from 'styled-components';
import ProjectCard from '../components/ProjectsCard';
import { featuredProject, social } from '../data';
import { Link } from 'react-router-dom';

const MainSections = () => {
  return (
    <Wrapper className="main-container">
      <div className="container-block"></div>
      <div className="navigation-container">
        <div className="navigation-text">
          <h3 className="theme-selector">Danny Bogatko</h3>
          <h5 className="theme-selector">programmer & web developer</h5>
          <p className="theme-selector">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            dolorem?
          </p>
          <div className="navigations">
            <a href="#about">
              <span className="span-line theme-selector"></span>
              <span className="span-link theme-selector">About me</span>
            </a>
            <a href="#projects">
              <span className="span-line theme-selector"></span>
              <span className="span-link theme-selector">Projects</span>
            </a>
          </div>
        </div>

        <div className="social-icons">
          {social.map((icon) => {
            return (
              <a
                href={icon.url}
                key={icon.id}
                className="main-icon theme-selector"
                target="_blank"
                rel="noreferrer"
              >
                {<icon.icon />}
              </a>
            );
          })}
        </div>
      </div>

      <div className="main-wrapper">
        <div className="about-section" id="about">
          <h3 className="main-sec-header theme-selector">Experienced with:</h3>
          <p className="main-p theme-selector">
            JS/Es6, Python, HTML5, CSS3, NodeJS, Express, MongoDB, React,
            React-Router, Headless CSM, Styled-Components, Axios, FIREBASE,
            Github
          </p>
          <p className="main-p theme-selector">
            Innovation and technology, powered by JavaScript/ES6, Python, HTML5,
            and CSS3, create modern web experiences. Node.js, Express, and
            MongoDB deliver robust backends. React, React-Router, and
            Styled-Components craft dynamic frontends. Axios and Firebase
            streamline data interactions. Github ensures collaboration and
            version control. These tools shape the digital landscape.
          </p>
          <p className="main-p theme-selector">
            The ability to develop frontend, backend, and full-stack
            applications is a valuable skill set. Frontend developers create
            engaging user interfaces using HTML, CSS, and JavaScript, while
            backend developers build server-side logic and databases with tools
            like Node.js, Express, and MongoDB. Full-stack developers possess a
            well-rounded expertise, capable of designing end-to-end solutions
            that seamlessly integrate both frontend and backend components,
            ensuring a cohesive and efficient user experience. This versatility
            empowers developers to tackle a wide range of projects and
            contribute significantly to the world of technology.
          </p>
          <Link to="/about" className="main-button btn-size-two theme-selector">
            Go to about
          </Link>
        </div>
        <div className="project-section" id="projects">
          <h3 className="main-sec-header theme-selector">My latest projects</h3>
          <div className="wrapper">
            {featuredProject.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
          <Link
            to="/projects"
            className="main-button btn-size-two theme-selector"
          >
            All of the projects
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  height: 80vh;
  margin: 10rem auto;
  display: flex;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;

  /* background: #fff; */

  .navigation-container {
    padding-top: 4rem;
    /* padding-bottom: 4rem; */
    width: 50%;
    height: 100%;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .navigations {
      display: flex;
      flex-direction: column;
      a {
        padding: 0.5rem 0;
        display: flex;
        align-items: center;

        &:hover > .span-line {
          width: 65px;
        }
      }
    }
    h3 {
      margin: 3rem 0;
    }
    h5 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    .social-icons {
      a {
        font-size: 2rem;
        margin-right: 1rem;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .about-section {
    padding-right: 2rem;
  }
  .main-p {
    margin-bottom: 2rem;
  }

  .main-wrapper {
    width: 50%;
    margin: 0 auto;
    padding: 4rem 0;

    .wrapper {
      /* display: grid;
      grid-template-columns: repeat(3, 1fr); */
    }
  }
  .main-sec-header {
    margin: 3rem 0;
    /* font-family: 'DM Serif Display', serif; */
    font-weight: 400;
    font-size: 20px;
  }

  .span-line {
    display: block;
    background: var(--black);
    width: 30px;
    height: 2px;
    margin-right: 1rem;
  }

  .span-line.dark-theme {
    background: var(--white);
  }
  .span-link.dark-theme {
    color: var(--white);
  }
`;

export default MainSections;
