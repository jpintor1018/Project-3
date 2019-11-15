import axios from "axios"

export default {
    allReservations: function(){
        return axios.get("/api/all-reservations")
    },
    availableTables: function(date, time, partySize){
        const reservation = {
            date: date,
            time: time,
            partySize: partySize
        }
        return axios.get("/api/available-tables", reservation)
    }
}