const Runner = function(statsdClient, pgConnection) {
    const statsdClient = statsdClient;
    const pgConnection = pgConnection;

    const run = () => {
        let view = {
            viewName: "bla",
            stats: [{
                "bla.com.number": {
                    type: "c",
                    field: "tablefield"
                }
            }]
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
                if (row[stat.field])
                formattedStats.push({
                    metric: ""
                })
            })
        });
    }
    return {
        run
    }
}
