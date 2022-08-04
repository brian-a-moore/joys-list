import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/lists">Lists</Link>
      <Link to="/templates">Templates</Link>
      <Link to="/settings">Settings</Link>
    </Wrapper>
  );
}

export default Nav;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Link = styled(RouterLink)``;
