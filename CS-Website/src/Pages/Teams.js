import global from '../Stylesheets/global.module.css';
import teams from '../Stylesheets/teams.module.css';
import { NavigationBar } from './Home';
import { Major } from '../Scripts/teamClasses';




function Teams() {
  const major = new Major();
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
            <h3 className={teams.titleText}>Challengers</h3>
            </div>
            {major.displayChallengerTeams()}
          </div>
          <div className={teams.legendsCon}>
            <div className={teams.titleBar}>
              <h3 className={teams.titleText}>Legends</h3>
            </div>
            {major.displayLegendsTeams()}
          </div>
        </div>
      </div>
      <footer className={global.footer}>
      </footer>
    </div>
  );
}

export default Teams;