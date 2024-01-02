/**
 * This file defines a series of methods that will be used to access the Riot API.
 *
 * TODO: add error handling
 */

require('dotenv').config()
API_KEY = "RGAPI-9d3c00ef-9e03-4d66-933f-507c27ac8336"

/**
 * Gets the account information for the given summoner.
 *
 * @param {String} name
 */
async function getSummonerByName(name) {
    const response = await fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + API_KEY)
    const data = await response.json()

    return data
}

/**
 * Gets the account information for the given summoner.
 *
 * @param {String} name
 */
async function getSummonerProfile(id) {
    const response = await fetch("https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + id + "?api_key=" + API_KEY)
    const data = await response.json()

    return data
}

/**
 * Gets all Ranked Solo matchIds for the specified PUUID.
 *
 * @param {String} puuid
 */
async function getRankedMatchesByPUUID(puuid) {
    const response = await fetch("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?queue=420&type=ranked&start=0&count=10&api_key=" + API_KEY)
    const data = await response.json()

    return data
}

/**
 * Gets the match data for the provided Match ID.
 *
 * @param {String} matchId
 */
async function getMatchData(matchId) {
    const response = await fetch("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchId + "?api_key=" + API_KEY)
    const data = await response.json()

    return data
}

module.exports = {
    getSummonerByName,
    getSummonerProfile,
    getRankedMatchesByPUUID,
    getMatchData
}