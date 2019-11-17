const orm = require("../controllers/orm")
const nodemailer = require('nodemailer');
require("dotenv")

module.exports = function (app) {

    app.get("/api/all-reservations", (req, res) => orm.selectAllRes((data) => res.json(data)))

    app.get("/api/available-tables/:date/:time/:partySize", (req, res) => orm.selectAvailableTables(req.params.date, req.params.time, req.params.partySize, (data) => res.json(data)))

    app.get("/api/all-tables", (req, res) => orm.selectAllTables(data => res.json(data)))

    app.put("/api/seat-customer/:tableID", (req, res) => orm.seatCustomer(req.params.tableID, data => res.json(data)))

    app.post("/api/make-reservation", (req, res) => orm.makeReservation(req.body.date, req.body.time, req.body.custID, req.body.table, (data) => res.json(data)))

    app.delete("/api/cancel-reservation", (req, res) => {
        console.log(req.body)
        orm.cancelReservation(req.body.reservationID, (data) => res.json(data))
    })

    app.post("/confirm-reservation", (req, res) => {

        let hour = parseInt(req.body.time.substring(0,2))
        let min = parseInt(req.body.time.substring(3,5))
        console.log(hour, min)
        let amPM = "PM"

        if (hour > 12){
            hour -= 12
        }
        else{
            amPM = "AM"
        }

        const output = 
        `   
            <div style="text-align:center">
            <h1><u>The Shed at Dulwich</u></h1>
            <img src='https://i.guim.co.uk/img/media/846ad19e4a8f8d026cf08645c2413251445816b2/9_5_2043_1226/master/2043.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=aeb1be15706139288a82bb8a217c662f'>
            <h2 style="color:#0FA655">Hi ${req.body.name}! Your reservation is confirmed!</h2>
            <p><strong>Date</strong>: ${req.body.date}</p>
            <p><strong>Time</strong>: ${hour}:${min} ${amPM}</p>
            </div>
        `


        let transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: "the.dulwich@gmail.com",
                pass: "Dulwich123"
            }
        });


        let mailoptions = {
            from: "the.dulwich@gmail.com", // sender address
            to: `${req.body.email}`, // list of receivers
            subject: 'The Shed at Dulwich - Reservation Confirmed', // Subject line
            text: `Hey ${req.body.name}`, // plain text body
            html: output
        };

        transporter.sendMail(mailoptions, (err, data) => {
            if (err) throw err
            console.log(data)
            res.sendStatus(200).end()
        });

    })
}
