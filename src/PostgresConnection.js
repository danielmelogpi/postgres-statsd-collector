
const getView = (connection, viewName, callback) => {

}

const Connection = (connectionInfo) => {
    let pgConnection = {}
    return {
        pgConnection: null, 
        getView: (view, callback) => {
            // pgconnection get view
            // call callback
        }
    }
}

module.exports = {
    Connection
}