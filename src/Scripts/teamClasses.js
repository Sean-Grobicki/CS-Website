import teams from '../Stylesheets/teams.module.css';
import swiss from '../Stylesheets/swiss.module.css';

export class Major
{
    constructor()
    {
        this.challengers = new Challengers();
        this.legends = new Legends();
    }

    displayChallengerTeams()
    {
        return (
            <div className={teams.displayVertical}>
                {this.challengers.displayEightTeams(0)}
                {this.challengers.displayEightTeams(8)}
            </div>
        )
    }

    displayLegendsTeams()
    {
        return this.legends.displayTeams();
    }


    
} 

class Legends
{
    constructor()
    {
        this.legendsTeams = [new Team("NAVI"),new Team("Fnatic"),new Team("Heroic"),new Team("9INE"),new Team("Furia"),new Team("Vitality"),new Team("ITB"),new Team("BNE")];
    }

    displayTeams()
    {
        let teamDisplay = [];
        for (let index = 0; index < this.legendsTeams.length; index++) {
            const team = this.legendsTeams[index];
            teamDisplay[index] = team.displayTeam(true,teams);
        }

        return (<div className={teams.displayHorizontal}>
                    {teamDisplay}
                </div>);
    }

}

class Challengers
{
    constructor()
    {
        this.challengerTeams = [new Team("OG"),new Team("Gamerlegion"),new Team("Mouz"),new Team("Apeks"),
                                new Team("Forze"),new Team("NIP"),new Team("G2"),new Team("Ence"),
                                new Team("Monte"),new Team("Grayhound"),new Team("TheMongolz"),new Team("Pain"),
                                new Team("Complexity"),new Team("Liquid"),new Team("Fluxo"),new Team("Faze"),];
    }


    displayAllTeams()
    {

    }

    displayEightTeams(startIndex)
    {
        let teamDisplay = [];
        for (let index = startIndex; index < startIndex + 8; index++) {
            const team = this.challengerTeams[index];
            teamDisplay[index] = team.displayTeam(false,teams);
        }

        return (<div className={teams.splitDiv}>
                    {teamDisplay}
                </div>);
    }
}


export class Team
{
    constructor(teamName)
    {
        this.teamName = teamName;
        this.logo = require(`../Images/${this.teamName}.png`);
    }

    displayTeam(legendStatus)
    {
        let className = teams.teamCon;
        if (legendStatus)
        {
            className += " " + teams.legendTeamCon;
        }
        return (
        <div className={className}>
            <img src={this.logo} className={teams.logo} alt={this.teamName}/>
            <h4 className={teams.teamText}>{this.teamName}</h4>
        </div>
        )
    }

    displayMatchupTeam()
    {
        return (
            <div className={swiss.teamCon}>
                <img src={this.logo} className={swiss.logo} alt={this.teamName}/>
                <h4 className={swiss.teamText}>{this.teamName}</h4>
            </div>
            )
    }
}
