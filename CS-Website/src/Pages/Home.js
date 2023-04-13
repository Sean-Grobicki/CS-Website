import { Link } from 'react-router-dom';
import '../Stylesheets/NavBar.css';
import '../Stylesheets/global.module.css';

function Home() {
  return (
    <div className="container">
      <header className="headerDiv">
        <h1 className='h1'>Blast Paris Major 2023</h1>
        <NavigationBar/>
        <h2>Home</h2>
      </header>
    </div>
  );
}

export default Home;

export function NavigationBar()
{
  return (
      <nav className="navbarCon">
        <Link className="navBarLink" to="/">Home</Link>
        <Link className='navbarLink' to="/Pickems">Pickems</Link>
        <Link className='navbarLink' to="/Teams">Teams</Link>
        <Link className='navbarLink' to ="/Rankings">Rankings</Link>
      </nav>
  );
}