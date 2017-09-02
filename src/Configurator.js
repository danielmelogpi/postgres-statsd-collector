const {Runner} = require('./Runner')

const buildRunner = (statsdClient, pgConnection) => {
    return Runner.create({
        statsdClient,
        pgConnection
    })
}

const Configurator = {
    buildRunner
}

module.exports = Configurator

