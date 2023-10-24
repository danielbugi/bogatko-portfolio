import { Link } from 'react-router-dom';
import { links } from '../data';
import styled from 'styled-components';
import { useSidebarContext } from '../context/SidebarContext';

const Sidebar = () => {
  const { btnActive } = useSidebarContext();
  return (
    <Wrapper className={btnActive ? 'sidebar sidebar-active' : 'sidebar'}>
      <ul className="nav-links">
        {links.map((link) => {
          const { text, url, id } = link;
          return (
            <li key={id}>
              <Link to={url} className="nav-link theme-selector">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  li a {
    color: var(--white);
  }
`;
export default Sidebar;
