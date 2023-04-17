import swiss from '../Stylesheets/swiss.module.css';
import {Team} from './teamClasses';

export class SwissSystem
{ 

    constructor(teams)
    {
        this.teams = teams;
        this.#sortTeamsInitialSeeding();
        this.#createMatchupStages();

    }

    displayInitialMatchups()
    {
        return this.matchup00.displayMatchups();
    }

    /*
        Stage is the stage that the result change occurs. eg.
        MatchupID is just the number of the matchup from the top
        TeamID is 0 for left team to win and 1 for right team to win
    */
    changeResult(stage,matchupID,teamID)
    {
        switch (stage) {
            case "0-0":
                this.matchup00.matchups[matchupID]
                break;
            case "1-0":
                
                break;
            case "0-1":
                
                break;
            case "2-0":
                
                break;
            case "1-1":
                
                break;
            case "0-2":
                
                break;
            case "2-1":
                
                break;
            case "1-2":
                
                break;
            case "2-2":
                
                break;
            default:
                break;
        }
        
    }

    getQualifiedTeams()
    {
        return this.qualifiedTeams;
    }

    #sortTeamsInitialSeeding()
    {

    }

    #createMatchupStages()
    {
        this.qualifiedTeams = [];

        this.matchup00 = new MatchupStage("0-0",teams);

        this.matchup10 = new MatchupStage("1-0",this.matchup00.getWinningTeams());
        this.matchup01 = new MatchupStage("0-1",this.matchup00.getLosingTeams());

        let teams11 = this.matchup10.getLosingTeams() + this.matchup01.getWinningTeams();

        this.matchup20 = new MatchupStage("2-0",this.matchup10.getWinningTeams());
        this.matchup11 = new MatchupStage("1-1",teams11);
        this.matchup02 = new MatchupStage("0-2",this.matchup01.getLosingTeams());

        this.qualifiedTeams += this.matchup20.getWinningTeams();
        let teams21 = this.matchup20.getLosingTeams() + this.matchup11.getWinningTeams();
        let teams12 = this.matchup02.getWinningTeams() + this.matchup11.getLosingTeams();

        this.matchup21 = new MatchupStage("2-1",teams21);
        this.matchup12 = new MatchupStage("1-2",teams12);

        this.qualifiedTeams += this.matchup21.getWinningTeams();
        let teams22 = this.matchup21.getLosingTeams() + this.matchup12.getWinningTeams();

        this.matchup22 = new MatchupStage("2-2",teams22);

        this.qualifiedTeams += this.matchup22.getWinningTeams();
    }
}

class MatchupStage
{
    constructor(recordAtStage,teams)
    {
        this.teams = teams;
        this.matchupName = recordAtStage;
        this.#seedTeams();
        this.#createMatchups();
    }

    getWinningTeams()
    {
        let winners = [];
        for (let index = 0; index < this.matchups.length; index++) 
        {
            const matchup = this.matchups[index];
            winners += matchup.getWinner();
        }

    }

    getLosingTeams()
    {
        let losers = [];
        for (let index = 0; index < this.matchups.length; index++) 
        {
            const matchup = this.matchups[index];
            losers += matchup.getLoser();
        }
    }

    #seedTeams()
    {
        
    }

    #createMatchups()
    {
        this.matchups = [];

        /* Seeds the teams by sorting the array based on bucholz score */
        this.teams = this.teams.sort(function(team1,team2){team1.bucholzScore-team2.bucholzScore});
        for (let index = 0; index < (teams.length/2); index++) {
            const team1 = teams[index];
            const team2 = teams[this.teams.length-index];
            matchup[index] = new Matchup(team1,team2);
        }
    }

}


class Matchup
{
    constructor(team1,team2)
    {
        this.team1 = team1;
        this.team2 = teams2;
    }

    changeResult(teamID)
    {
        if (teamID == 0)
        {
            this.team1.recordWin();
            this.team2.recordLoss();
        }
        else
        {
            this.team2.recordWin();
            this.team1.recordLoss();
        }
    }

    getWinner()
    {
        return this.team1.bucholzScore > this.team2.bucholzScore ? this.team1 : this.team2;
    }

    getLoser()
    {
        return this.team1.bucholzScore > this.team2.bucholzScore ? this.team2 : this.team1;
    }
}

class Team
{
    constructor(seed)
    {
        this.bucholzScore = seed;
    }

    recordWin(losingTeam)
    {
        this.wins ++;
        /* Adjust bucholz score*/
    }

    recordLoss(winningTeam)
    {
        this.losses ++;
        /* Adjust bucholz score*/
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

