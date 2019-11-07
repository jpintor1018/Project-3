const connection = require("../Models/db_config")

const orm = {
    selectAllRes: (cb) => {
        let statement = "SELECT * FROM Reservations"
        connection.query(statement, (err, data) => {
            if (err) throw err 
            console.log(data)
            cb(data)
        })
    }
}




module.exports = orm