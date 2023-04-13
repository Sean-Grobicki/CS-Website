import '../Stylesheets/global.module.css';
import { NavigationBar } from './Home';

function Rankings() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blast Paris Major 2023</h1>
        <NavigationBar/>
        <h2>Valve Rankings</h2>
      </header>
    </div>
  );
}

export default Rankings;