import { Link } from 'react-router-dom';

//const Header: React.FC = () -> {
function Header() {
  return (
    <header className="header">
      <div className="logo"><a className="logo-a" href="/">Gunwati Agrawal</a></div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tutoring">Tutoring</Link>
        {/* <Link to="/blog">Blog</Link> Uncomment to add blog link */}
      </nav>
    {/*  <nav>*/}
    {/*       <a href="/">Home</a>*/}
    {/*<a href="/projects">Projects</a>*/}
    {/*<a href="/tutoring">Tutoring</a>*/}
    {/*/!*<a href="/blog">Blog</a>*!/ */}
    {/*  </nav>*/}
    </header>
  );
}

export default Header;
