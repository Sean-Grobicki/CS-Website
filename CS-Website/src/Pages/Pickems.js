import global from '../Stylesheets/global.module.css';
import swiss from '../Stylesheets/swiss.module.css';
import { NavigationBar } from './Home'
import { Matchup } from '../Scripts/swissBucholz';

function Pickems() {
  return (
    <div className={global.container}>
      <header className={global.headerCon}>
        <NavigationBar/>
      </header>
      <div className={global.contentCon}>
          <h2 className={global.h2}>Pickems</h2>
          <div className={swiss.mainCon}>
            <div className={swiss.matchupCon}>
              <h4 className={swiss.title}>BO1 0-0 </h4>
              <div className={swiss.matchupBody}>
                <Matchup/>
                <Matchup/>
                <Matchup/>
                <Matchup/>
                <Matchup/>
                <Matchup/>
                <Matchup/>
                <Matchup/>
              </div>
            </div>

            <div className={swiss.matchesCon}>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}>BO1 1-0 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}>BO1 0-1 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
            </div>

            <div className={swiss.matchesCon}>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}>BO3 2-0 </h4>
                <div className={swiss.matchupBody}>
                    <Matchup/>
                    <Matchup/>
                </div>
              </div>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}>BO1 1-1 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}> BO3 0-2 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
            </div>

          <div className={swiss.matchesCon}>
              
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}> BO3 2-1 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
              <div className={swiss.matchupCon}>
                <h4 className={swiss.title}>BO3 1-2 </h4>
                <div className={swiss.matchupBody}>
                  <Matchup/>
                  <Matchup/>
                  <Matchup/>
                </div>
              </div>
           </div>

          

          <div className={swiss.matchupCon}>
            <h4 className={swiss.title}>BO3 2-2 </h4>
            <div className={swiss.matchupBody}>
                <Matchup/>
                <Matchup/>
                <Matchup/>
            </div>
          </div>

        </div>

        <div className={swiss.qualedTeamsMainCon}>
          <h3 className={swiss.title}>Qualified Teams</h3>
          <div className={swiss.qualedTeamsCon}>

          </div>
        </div>
      </div>

      

      <footer className={global.footer}>
      </footer>
    </div>
  );
}

export default Pickems;