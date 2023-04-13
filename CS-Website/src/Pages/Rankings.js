import global from '../Stylesheets/global.module.css';
import { NavigationBar } from './Home';

function Rankings() {
  return (
    <div className={global.container}>
      <header className={global.headerCon}>
        <NavigationBar/>
      </header>
      <div className={global.contentCon}> 
        <h2 className={global.h2}>Valve Rankings</h2>
      </div>
    </div>
  );
}

export default Rankings;