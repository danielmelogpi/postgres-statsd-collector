const config = require('./../config')
const Configurator = require('./Configurator')
const PostgresConnection = require('./PostgresConnection')

const Main = {
    go: () => {
        console.log(config)
        
        let connections = config.dbs.map(PostgresConnection)
        connections.forEach((connection) => {
            const runner = Configurator.buildRunner({}, connection)
            setTimeout(() => runner.run(), 5000)
        });
        
    }
}

module.exports = {
    Main
}
