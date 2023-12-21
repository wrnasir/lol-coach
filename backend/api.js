require('dotenv').config()

const https = require("https");


DEFAULT_URL = "https://na1.api.riotgames.com/lol/"
API_KEY = process.env.API_KEY

/**
 * Gets the account information for the given summoner.
 * 
 * @param {String} name 
 */
const getSummonerByName = async (name) => {
    https.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + API_KEY, resp => {
            logData(resp)
        })

        .on("error", err => {
            console.log("Error: " + err.message);
        });
}

/**
 * Gets all Ranked Solo matchIds for the specified PUUID. 
 * 
 * @param {String} puuid 
 */
const getRankedMatchesByPUUID = async (puuid) => {
    https.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?type=ranked&start=0&count=10&api_key=" + API_KEY, resp => {
            return logData(resp)
        })

        .on("error", err => {
            console.log("Error: " + err.message);
        });
}

/**
 * Gets the match data for the provided Match ID.
 * 
 * @param {String} matchId 
 */
const getMatchData = async (matchId) => {
    https.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchId + "?api_key=" + API_KEY, resp => {
            logData(resp)
        })

        .on("error", err => {
            console.log("Error: " + err.message);
        });
}

/**
 * Processes the response data.
 * 
 * @param {*} resp 
 */
const logData = async (resp) => {
    let data = "";

    // log the data
    resp.on("data", d => {
        data += d;
    });

    resp.on("end", () => {
        console.log(JSON.parse(data));
    })
}



//testing functions
getSummonerByName("Bsmifey")
getRankedMatchesByPUUID("J2kEuv51Z6IGLbJ4uX4bh8IT1B7IwlRtjhSXBueM_UReSdUnHUuc4PSIjhHOusRByML_79n72xLiog")
getMatchData("NA1_4865369410")