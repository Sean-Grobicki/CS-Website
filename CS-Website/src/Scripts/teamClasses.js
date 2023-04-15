import teams from '../Stylesheets/teams.module.css';

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
            <div className={teams.displayHorizontal}>
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
        this.legendsTeams = [new Team("Navi"),new Team("Fnatic"),new Team("Heroic"),new Team("9INE"),new Team("Furia"),new Team("Vitality"),new Team("IntoTheBreach"),];
    }

    displayTeams()
    {
        let teamDisplay = [];
        for (let index = 0; index < this.legendsTeams.length; index++) {
            const team = this.legendsTeams[index];
            teamDisplay[index] = team.displayTeam();
        }

        return (<div className={teams.displayVertical}>
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
            teamDisplay[index] = team.displayTeam();
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
        this.logo = import(`../Images/${this.teamName}.png`);
    }

    displayTeam()
    {
        return (
        <div className={teams.teamCon}>
            <img src={this.logo} className={teams.logo} alt={this.teamName}/>
            <h4 className={teams.teamText}>{this.teamName}</h4>
        </div>
        )
    }
}
