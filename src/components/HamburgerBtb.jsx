import styled from 'styled-components';
import { useSidebarContext } from '../context/SidebarContext';

const HamburgerBtb = () => {
  const { activeSideBtn, btnActive } = useSidebarContext();

  return (
    <Wrapper className="hamburger" onClick={activeSideBtn}>
      <div
        className={
          btnActive
            ? 'line-1 theme-selector hamburger-active'
            : 'line-1 theme-selector'
        }
      ></div>
      <div
        className={
          btnActive
            ? 'line-2 theme-selector hamburger-active'
            : 'line-2 theme-selector'
        }
      ></div>
      <div
        className={
          btnActive
            ? 'line-3 theme-selector hamburger-active'
            : 'line-3 theme-selector'
        }
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  display: none;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .line-1,
  .line-2,
  .line-3 {
    width: 28px;
    height: 2px;
    background: var(--black);
    position: absolute;
    top: 50%;
    right: 15%;
    transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  }

  .line-1 {
    transform: translateY(-8px);
    animation-delay: 100ms;
  }

  .line-3 {
    transform: translateY(8px);
    animation-delay: 100ms;
  }

  .hamburger-active:nth-child(1) {
    transform: rotate(40deg);
    animation-delay: 100ms;
  }
  .hamburger-active:nth-child(2) {
    /* display: none; */
    opacity: 0;
  }
  .hamburger-active:nth-child(3) {
    transform: rotate(-40deg);
    animation-delay: 250ms;
  }

  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export default HamburgerBtb;
