import React from "react";
import API from "../utils/API";

class Host extends React.Component {
  constructor() {
    super();
    this.state = {
      waiting: [],
      tables: []
    };
  }

  componentDidMount() {
    API.allReservations().then(res => this.setState({ waiting: res.data }));
    API.allTables().then(res => {
      this.setState({ tables: res.data })
      console.log(this.state.tables)
    });
  }

  seatCustomer(cust) {
      console.log("CUST", cust)
    const waiting = this.state.waiting.filter(
      customer => customer.custID !== cust.custID
    );
    API.seatCustomer(cust.tableID)
    .then(API.allTables()
    .then(res => this.setState({waiting: waiting, tables: res.data})))
  }

  render() {
    return (
      <div className="container">
        <h1>Tables</h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Table#</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tables.map(table => (
              <tr key={table.tableID}>
                  <td>
                  <button
                    key={table.tableID}
                    onClick={() => console.log("clicked")}
                    className="btn btn-danger clear"
                  >
                    Clear
                  </button>
                </td>
                <td key={table.tableID}>{table.tableID}</td>
                {table.occupied ? <td style={{color:"red"}}><strong>Occupied</strong></td> : <td style={{color:"#28A745"}}><strong>Available</strong></td>}
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Waiting</h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Seat Customer</th>
              <th scope="col">CustID</th>
              <th scope="col">Table#</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.waiting.map(cust => (
              <tr key={cust.custID}>
                <td>
                  <button
                    key={cust.custID}
                    onClick={() => this.seatCustomer(cust)}
                    className="btn btn-success seat"
                  >
                    Seat
                  </button>
                </td>
                <td key={cust.custID}>{cust.firstName}</td>
                <td key={cust.tableID}>{cust.tableID}</td>
                <td key={cust.timeSlot}>{cust.timeSlot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Host;
