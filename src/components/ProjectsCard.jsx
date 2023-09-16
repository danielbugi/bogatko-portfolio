/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ProjectsCard = ({ project }) => {
  // eslint-disable-next-line no-unused-vars
  const { title, img, text, id, url, githubUrl } = project;

  return (
    <Wrapper className="card-project">
      <div className="card-link-wrapper">
        <div className="card-header">
          <div className="project-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="card-description">
          <h4 className="project-title theme-selector">{title}</h4>
          <p className="project-desc theme-selector">{text}</p>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 15rem; */
  margin-bottom: 4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;

  .card-link-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: 0 -1px 0 0 rgba(124, 163, 202, 0.663);
    background-color: rgba(124, 163, 202, 0.388);
    backdrop-filter: blur(20px);
  }
  &:hover .card-link-wrapper > .card-header > .project-img {
    filter: none;
  }
  .card-header {
    height: 100%;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-size: 20px;
    }
  }

  .project-img {
    height: 100%;
    width: 15rem;
    border-radius: 5px;

    filter: grayscale(100%);
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }

  .card-description {
    width: 100%;
    height: 100%;
    display: block;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .project-desc {
    color: var(--dark-grey);
    font-size: 0.9rem;
    /* margin-bottom: 2rem; */
  }
  .project-desc.dark-theme {
    color: var(--light-grey);
  }

  .project-title {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1320px) {
    .card-link-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .card-description {
      padding: 0;
      align-items: center;
      text-align: center;
    }

    .project-img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      padding: 0;
    }
  }
  .projects-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* padding: 0 5rem; */
  }

  @media screen and (max-width: 1070px) {
    .projects-buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0;
    }
  }
  @media screen and (max-width: 620px) {
    .projects-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
      a {
        width: 100%;
      }
    }
    .project-img {
      align-self: center;
      width: 70%;
    }
  }
`;

export default ProjectsCard;
