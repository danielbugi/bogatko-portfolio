/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ProjectsCard = ({ project }) => {
  // eslint-disable-next-line no-unused-vars
  const { title, img, text, id } = project;

  return (
    <Wrapper className="card-project">
      <Link className="card-link-wrapper" to={`/projects/${id}`}>
        <div className="card-header">
          <div className="project-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="card-description">
          <h4 className="project-title theme-text">{title}</h4>
          <p className="project-desc theme-text">{text}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20rem;
  margin-bottom: 4rem;

  border-radius: 5px;

  .card-link-wrapper {
    display: flex;
    padding: 1.5rem;
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

    /* .card-header-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      height: 40%;
      border-radius: 5px 5px 0 0;
      background: #1c1c1c; */
    /* .logo {
        /* height: 100%; */
    /* display: flex;
        align-items: center;
        gap: 0.2rem;
        img {
          height: 1.5rem;
          width: 1.5rem;
        }
      } */

    h4 {
      font-size: 20px;
    }
  }
  .project-img {
    height: 15rem;
    width: 15rem;
    border-radius: 0 0 5px 5px;
    filter: grayscale(100%);
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .card-description {
    padding-left: 2rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .author {
      display: block;
      margin-bottom: 1rem;
      color: #4d4d4d;
      font-size: 0.9rem;
    }
  }

  .project-desc {
    color: #4d4d4d;
    font-size: 0.9rem;
  }
  .project-desc.dark-theme {
    color: #c2c2c2;
    font-size: 0.9rem;
  }

  .project-title {
    margin: 1rem 0;
    font-size: 25px;
  }
`;

export default ProjectsCard;