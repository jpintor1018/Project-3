const connection = require("../Models/db_config")

const orm = {
    selectAllRes: (cb) => {
        const statement = "SELECT r.*, c.firstName FROM Reservations as r INNER JOIN Customers as c on r.custID = c.custID order by r.timeSlot"
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
        const statement = "SELECT tableID, seatedCustID, c.firstName FROM restaurant_tables as t LEFT JOIN customers as c on c.custID = t.seatedCustID"
        connection.query(statement, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    seatCustomer: (tableID, custID, cb) => {
        console.log("TI: " , tableID)
        const statement = "UPDATE restaurant_tables SET seatedCustID = ? WHERE tableID = ?"
        connection.query(statement, [custID, tableID], (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    clearTable: (tableID, cb) => {
        const statement = "UPDATE restaurant_tables SET seatedCustID = NULL WHERE tableID = ?"
        connection.query(statement, [tableID], (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    selectOpenTables: cb => {
        const statement = "SELECT tableID from restaurant_tables WHERE seatedCustID is NULL"
        connection.query(statement, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    }
}




module.exports = orm