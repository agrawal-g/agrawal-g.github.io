
//import { Link } from 'react-router-dom';

//const Header: React.FC = () -> {
function Header() {
  return (
    <header className="header">
      <div className="logo"><a className="logo-a" href="/">Gunwati Agrawal</a></div>
      <nav>
           <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/tutoring">Tutoring</a>
    {/*/!*<a href="/blog">Blog</a>*!/ Uncomment to add blog link*/}
      </nav>
    </header>
  );
}

export default Header;
