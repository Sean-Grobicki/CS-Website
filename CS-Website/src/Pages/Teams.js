import global from '../Stylesheets/global.module.css';
import { NavigationBar } from './Home';

function Teams() {
  return (
    <div className={global.container}>
      <header className={global.headerCon}>
        <NavigationBar/>
      </header>
      <div className={global.contentCon}> 
        <h2 className={global.h2}>Teams Attending</h2>
      </div>
    </div>
  );
}

export default Teams;