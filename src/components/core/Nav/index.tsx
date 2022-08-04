import { Link, Wrapper } from "./style";

const Nav = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/lists">Lists</Link>
      <Link to="/templates">Templates</Link>
      <Link to="/settings">Settings</Link>
    </Wrapper>
  );
};

export default Nav;
