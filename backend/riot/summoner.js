import {
    getSummonerByName,
    getRankedMatchesByPUUID,
    getMatchData
} from ('api')

/** Creates a summoner object for the given username. Holds basic data * for summoner. * @author Waleed Nasir */
let summoner = class {
    wins
    losses
    kills
    kpg
    assists
    apg
    deaths
    dpg
    kda

    /**
     * Gets up to the last ten ranked matches for a summoner. 
     * 
     * @param {String} username the summoner's username 
     */

    constructor(username) {
        getSummonerByName(username).then(data => console.log(data))
    }

    /** Gets the sum of the number of kills the summoner has gotten in up * to the last ten ranked matches they have played. */
    getTotalKills = () => {}
    /** Gets the sum of the number of assists the summoner has gotten in up * to the last ten ranked matches they have played. */
    getTotalAssists = () => {}
    /** Gets the sum of the number of deaths the summoner has gotten in up * to the last ten ranked matches they have played. */
    getTotalDeaths = () => {}
    /** Gets the KDA Ratio the summoner has gotten in up * to the last ten ranked matches they have played. */
    getKDA = () => {}
}

donda = new summoner("BSmifey")