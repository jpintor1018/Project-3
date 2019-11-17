const connection = require("../Models/db_config")

const orm = {
    selectAllRes: (cb) => {
        const statement = "SELECT * FROM Reservations"
        connection.query(statement, (err, data) => {
            if (err) throw err 
            // console.log(data)
            cb(data)
        })
    },
    makeReservation: (date, time, custID, table, cb) => {
        const statement = "INSERT INTO Reservations(dateOfReservation, timeSlot, custID, tableID) VALUES (?,?,?,?)"
        connection.query(statement, [date, time, custID, table], (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    cancelReservation: (resID, cb) => {
        const statement = "DELETE FROM Reservations WHERE reservationID = ?"
        connection.query(statement, [resID], (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    selectAvailableTables: (date, time, partySize, cb) => {
        const statement = "SELECT tableID FROM restaurant_tables WHERE numOfChairs >= ? and tableID not in (SELECT tableID FROM Reservations WHERE dateOfReservation = ? and timeSlot = ?)"
        connection.query(statement, [partySize, date, time], (err, data) => {
            if (err) throw err
            // console.log(data)
            cb(data)
        })
    },
    selectAllTables: (cb) => {
        const statement = "SELECT tableID, occupied FROM restaurant_tables"
        connection.query(statement, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    seatCustomer: (tableID, cb) => {
        console.log("TI: " , tableID)
        const statement = "UPDATE restaurant_tables SET occupied = 1 WHERE tableID = " + tableID
        connection.query(statement, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    }
}




module.exports = orm