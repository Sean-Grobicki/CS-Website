import global from '../Stylesheets/global.module.css';
import { NavigationBar } from './Home'

function Pickems() {
  return (
    <div className={global.container}>
      <header className={global.headerCon}>
        <NavigationBar/>
      </header>
      <div className={global.contentCon}>
          <h2 className={global.h2}>Pickems</h2>
      </div>
      <footer className={global.footer}>
        
      </footer>
    </div>
  );
}

export default Pickems;