
/** Creates a runner, that can query statistics, transform them
 * and send them to a statsd daemon.
 */
const create = function(statsdClient, pgConnection) {
    const statsd = statsdClient;
    const pg = pgConnection;

    const run = () => {
        let view = {
            viewName: "bla",
            stats: [
                {
                    path: "bla.com.number",
                    type: "c",
                    field: "tablefield"
                }
            ]
        }
        pgConnection.get(view, (data) => {
            send(transform(view, data))
        })
    }

    /** Returns an array of statsd formatted metrics
     * This uses the view configuration to create different kinds of metrics
     * compatible with statsd daemon.
     * 
     */
    const transform = (view, data) => {
        let formattedStats = []
        view.stats.forEach(function(stat) {
            data.forEach((row) => {
                let statFromTable = row[stat.field];
                if (statFromTable && statFromTable.length) {
                    formattedStats.push({
                        metric: stat.path+":"+statFromTable+"|"+stat.type
                    })
                }
                
            })
        });
    }

    return {
        run
    }
}

const Runner = {
    create
}
module.exports = Runner;