import { Link } from 'react-router-dom';
import navbarStyle from'../Stylesheets/navBar.module.css';
import globalStyle from '../Stylesheets/global.module.css';

function Home() {
  return (
    <div className={globalStyle.container}>
      <header className={globalStyle.headerCon}>
        <NavigationBar/>
      </header>
      <div className={globalStyle.contentCon}>
        <h2 className={globalStyle.h2}>Home</h2>
      </div>
      <footer className={globalStyle.footer}>
        
      </footer>
    </div>
  );
}

export default Home;

export function NavigationBar()
{
  return (
      <nav className={navbarStyle.navbarCon}>
        <Link className={navbarStyle.navbarLink} to="/">Blast Paris Major 2023</Link>
        <Link className={navbarStyle.navbarLink} to="/Pickems">Pickems</Link>
        <Link className={navbarStyle.navbarLink} to="/Teams">Teams</Link>
        <Link className={navbarStyle.navbarLink} to ="/Rankings">Rankings</Link>
      </nav>
  );
}