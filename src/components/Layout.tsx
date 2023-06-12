import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/register'}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
