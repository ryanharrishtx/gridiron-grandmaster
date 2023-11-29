const fetchMyData = async () => {
    const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    const data = await response.json()
    const teams = data.sports[0].leagues[0].teams
    const teamNames = teams.map(team => team.team.displayName)
    console.log(data)
}

fetchMyData();