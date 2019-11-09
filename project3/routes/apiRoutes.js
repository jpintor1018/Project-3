const orm = require("../controllers/orm")

module.exports = function (app) {
    
    app.get("/api/all-reservations", (req, res) => orm.selectAllRes((data) => res.json (data)))

    app.get("/api/available-tables", (req, res) => orm.selectAvailableTables(req.body.date, req.body.time, req.body.partySize, (data) => res.json(data)))

    app.post("/api/make-reservation", (req, res) => orm.makeReservation(req.body.date, req.body.time, req.body.custID, req.body.table, (data) => res.json(data)))

    app.delete("/api/cancel-reservation", (req, res) => orm.cancelReservation(req.body.resID, (data) => res.json(data)))

}