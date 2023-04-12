import { Link } from 'react-router-dom';
import '../Stylesheets/App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blast Paris Major 2023</h1>
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Pickems">Pickems</Link>
        <Link to="/Teams">Teams</Link>
        <Link to ="/Rankings">Rankings</Link>
      </nav>
  );
}