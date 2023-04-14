import global from '../Stylesheets/global.module.css';
import teams from '../Stylesheets/teams.module.css';
import { NavigationBar } from './Home';
import FnaticLogo from '../Images/fnaticLogo.png';

function Teams() {
  return (
    <div className={global.container}>
      <header className={global.headerCon}>
        <NavigationBar/>
      </header>
      <div className={global.contentCon}> 
        <h2 className={global.h2}>Teams Attending</h2>
        <div className={teams.displayHorizontal}>
          <div className={teams.challengersCon}>
            <div className={teams.titleBar}>
            < h3 className={teams.titleText}>Challengers</h3>
            </div>
            <div className={teams.displayHorizontal}>
              <div className={teams.splitDiv}>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
              </div>
              <div className={teams.splitDiv}>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
              </div>
            </div>
          </div>
          <div className={teams.legendsCon}>
            <div className={teams.titleBar}>
              <h3 className={teams.titleText}>Legends</h3>
            </div>
              <Team/>
              <Team/>
              <Team/>
              <Team/>
              <Team/>
              <Team/>
              <Team/>
              <Team/>
          </div>
        </div>
      </div>
      <footer className={global.footer}>
      </footer>
    </div>
  );
}

export default Teams;


export function Team()
{
  return(
    <div className={teams.teamCon}>
      <img src={FnaticLogo} className={teams.logo}/>
      <h4 className={teams.teamText}>Fnatic</h4>
    </div>
  )

}