const API = require('./api')


function findParticipant(data, name) {
    var userArr = data.info.participants

    for (let i = 0; i < userArr.length; i++) {
        var username = userArr[i].summonerName
        if (username == name) {
            return i;
        }
    }

    return -1;
}

async function getRank(summonerId) {
    var data = await API.getSummonerProfile(summonerId)
    var index = -1

    // make sure to find the correct place in array since it can vary (for now)
    for (let i = 0; i < data.length; i++) {
        if ("RANKED_SOLO_5x5" == data[i].queueType) {
            index = i;
        }
    }


    return data[index].tier + " " + data[index].rank
}

async function getGameKills(matchId, name) {
    var data = await API.getMatchData(matchId)
    var index = findParticipant(data, name)
    return data.info.participants[index].kills
}

async function getGameAssists(matchId, name) {
    var data = await API.getMatchData(matchId)
    var index = findParticipant(data, name)
    return data.info.participants[index].assists
}

async function getGameDeaths(matchId, name) {
    var data = await API.getMatchData(matchId)
    var index = findParticipant(data, name)
    return data.info.participants[index].deaths
}

async function getGameChampion(matchId, name) {
    var data = await API.getMatchData(matchId)
    var index = findParticipant(data, name)
    return data.info.participants[index].championName
}

async function getAllTimeWins(summonerId) {
    var data = await API.getSummonerProfile(summonerId)
    var index = -1

    // make sure to find the correct place in array since it can vary (for now)
    for (let i = 0; i < data.length; i++) {
        if ("RANKED_SOLO_5x5" == data[i].queueType) {
            index = i;
        }
    }

    return data[index].wins
}

async function getAllTimeLosses(summonerId) {
    var data = await API.getSummonerProfile(summonerId)
    var index = -1

    // make sure to find the correct place in array since it can vary (for now)
    for (let i = 0; i < data.length; i++) {
        if ("RANKED_SOLO_5x5" == data[i].queueType) {
            index = i;
        }
    }

    return data[index].losses
}

async function getTotalKills(puuid) {
    var data = await API.getRankedMatchesByPUUID(puuid)
    let size = data.length
    let total = 0;

    for (let i = 0; i < size; i++) {
        game = data[i]
        total += await getGameKills(game, "Bsmifey")
    }

    return total;
}

async function getTotalAssists(puuid) {
    var data = await API.getRankedMatchesByPUUID(puuid)
    let size = data.length
    let total = 0;

    for (let i = 0; i < size; i++) {
        game = data[i]
        total += await getGameAssists(game, "Bsmifey")
    }

    return total;
}

async function getTotalDeaths(puuid) {
    var data = await API.getRankedMatchesByPUUID(puuid)
    let size = data.length
    let total = 0;

    for (let i = 0; i < size; i++) {
        game = data[i]
        total += await getGameDeaths(game, "Bsmifey")
    }

    return total;
}

/**
 * Returns a String representation of the summoner. Used for testing.
 *
 * @param {String} name
 */
async function toString(name) {
    champ = await getGameChampion("NA1_4871595384", name)

    wins = await getAllTimeWins("u1dU7oy004QOmpB6GBKQs81IJzQEr7fvN65Z_XZMh1mZwGcw")

    losses = await getAllTimeLosses("u1dU7oy004QOmpB6GBKQs81IJzQEr7fvN65Z_XZMh1mZwGcw")

    kills = await getTotalKills("KR8HwjsPpVNQpQ2ehnJOtdZkvXs4KAo4Am9m41Wy_U-ppNXRf_CJaYSLxdMqWDtg8tnubjJ1Ge-zWg")

    deaths = await getTotalDeaths("KR8HwjsPpVNQpQ2ehnJOtdZkvXs4KAo4Am9m41Wy_U-ppNXRf_CJaYSLxdMqWDtg8tnubjJ1Ge-zWg")

    assists = await getTotalAssists("KR8HwjsPpVNQpQ2ehnJOtdZkvXs4KAo4Am9m41Wy_U-ppNXRf_CJaYSLxdMqWDtg8tnubjJ1Ge-zWg")

    console.log("Stats for: " + name +
        "\nWins: " + wins +
        "\nLosses: " + losses +
        "\nMost Recent Champion: " + champ +
        "\nKills: " + kills +
        "\nDeaths: " + deaths +
        "\nAssists: " + assists)
}

// test out
toString("Bsmifey")