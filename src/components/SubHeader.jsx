import { styled } from 'styled-components';

/* eslint-disable react/prop-types */
const SubHeader = ({ words, currentIndex }) => {
  return (
    <Wrapper className="sub-header-con">
      <h4 className="sub-header theme-selector">I create:</h4>
      {words.map((word, wordsIndex) => {
        return (
          <h4
            className="sub-header-change theme-selector"
            key={wordsIndex}
            style={{
              transform: `translateY(-${55 * (currentIndex - wordsIndex)}px`,
              opacity: currentIndex === wordsIndex ? 1 : 0,
              visibility: wordsIndex === currentIndex ? 'visible' : 'hidden',
            }}
          >
            {word}
          </h4>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 65px; /* Set the fixed height for the container */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;

  h4 {
    font-size: 40px;
    color: var(--black);
    font-weight: 500;
    /* font-family: 'DM Serif Display', serif; */
  }

  .sub-header.dark-theme {
    color: var(--white);
  }

  .sub-header-change {
    height: 100%;
    font-weight: 500;
    display: inline-block;
    position: absolute;
    left: 12rem;
    color: var(--black);
  }

  .sub-header-change.dark-theme {
    color: var(--white);
  }
`;
export default SubHeader;
