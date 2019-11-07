const orm = require("../controllers/orm")

module.exports = function (app) {
    
    app.get("/api/all-reservations", (req, res) => orm.selectAllRes((data) => res.json (data)))

}