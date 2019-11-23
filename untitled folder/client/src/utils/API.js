import axios from "axios"


export default {
    allReservations: () => axios.get("/api/all-reservations"),
    availableTables: (date, time, partySize) => axios.get("/api/available-tables/" + date + "/" + time + "/" + partySize),
    makeReservation: (date, time, custID, table) => {
        const reservation = {
            date: date,
            time: time,
            custID: custID,
            table: table
        }
        axios.post("/api/make-reservation", reservation)
    },
    cancelReservation: resID => {
        axios.delete("/api/cancel-reservation", {
            data: {reservationID: resID}
        })
    },
    confirmReservation: (name, email, date, time) => {
        const confirmation = {
            name: name,
            email: email,
            date: date,
            time: time
        }
        axios.post("/confirm-reservation", confirmation)
        .then("EMAIL SENT")
    },
    allTables: () => axios.get("/api/all-tables"),
    seatCustomer: (tableID, custID) => axios.put("/api/seat-customer/" + tableID + "/" + custID),
    clearTable: tableID => axios.put("/api/clear-table/" + tableID),
    openTables: () => axios.get("/api/open-tables")
    
}