/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const TechMini = ({ techs }) => {
  return (
    <Wrapper className="tech-mini-box">
      {techs.map((item) => {
        return (
          <div className="tech-mini theme-selector" key={item}>
            <span>{item}</span>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .tech-mini {
    background: var(--light-grey);
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 16px;
    margin-bottom: 0.4rem;
    margin-right: 0.4rem;
    text-transform: capitalize;
  }

  .tech-mini.dark-theme {
    background: var(--dark-grey);
  }

  @media screen and (max-width: 420px) {
    .tech-mini {
      font-size: 12px;
    }
  }
`;
export default TechMini;
