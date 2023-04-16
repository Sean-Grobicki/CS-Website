import swiss from '../Stylesheets/swiss.module.css';
import {Team} from './teamClasses';

export class SwissSystem
{
    constructor(legendsStage)
    {
        if (legendsStage)
        {

        }
        this.matchup00 = new MatchupStage("0-0",8,this.teams);
    }
}

class MatchupStage
{
    matches = [];
    teams = [];
    records = [];
    initialSeeding = [];

    constructor(recordAtStage,noOfMatchups)
    {
        this.matchupName = recordAtStage;
        for (let index = 0; index < noOfMatchups; index++) {
            this.matches[index] = new Matchup();
        }
    }

}

export function Matchup()
{
    let team1 = new Team("Fnatic",swiss.logo);
    let team2 = new Team("NAVI",swiss.logo);
    return (
        <div className={swiss.matchCon}>
            {team1.displayMatchupTeam()}
            <p className={swiss.vs}>VS</p>
            {team2.displayMatchupTeam()}
        </div>
    )


}

export function PlayOffBracket()
{

}

