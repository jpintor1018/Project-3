import axios from "axios"

export default {
    allReservations: function(){
        return axios.get("api/all-reservations")
    }
}