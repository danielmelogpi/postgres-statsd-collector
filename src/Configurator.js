import Runner from './Runner'

export const Configurator = (statsdClient, pgConnection) => {
    return new Runner({
        statsdClient,
        pgConnection
    })
}