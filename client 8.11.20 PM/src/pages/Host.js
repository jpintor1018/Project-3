import React from "react";
import API from "../utils/API";

class Host extends React.Component {
  constructor() {
    super();
    this.state = {
      waiting: [],
      tables: [],
      openTables: []
    };
  }

  updateTables() {
    API.openTables().then(res => {
      const availableTables = res.data.map(table => table.tableID);
      this.setState({ openTables: availableTables });
    });
  }

  componentDidMount() {
    API.allReservations().then(res => this.setState({ waiting: res.data }));
    API.allTables().then(res => {
      this.setState({ tables: res.data });
    });
    this.updateTables();
  }

  seatCustomer(cust) {
    const waiting = this.state.waiting.filter(
      customer => customer.custID !== cust.custID
    );
    API.seatCustomer(cust.tableID, cust.custID).then(
      API.allTables().then(res => {
        this.setState({ waiting: waiting, tables: res.data });
      })
    );
    this.updateTables();
  }

  clearTable(tableID) {
    this.checkTable(tableID);
    API.clearTable(tableID).then(
      API.allTables().then(res => {
        this.setState({ tables: res.data });
        this.checkTable(tableID);
      })
    );
    this.updateTables();
  }

  checkTable(tableID) {
    API.openTables().then(res => {
      const availableTables = res.data.map(table => table.tableID);
      return availableTables.indexOf(tableID);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Tables</h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Clear Table</th>
              <th scope="col">Table#</th>
              <th scope="col">Customer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tables.map(table => (
              <tr key={table.tableID}>
                {table.seatedCustID ? (
                  <td>
                    <button
                      key={table.tableID}
                      onClick={() => this.clearTable(table.tableID)}
                      className="btn btn-danger clear"
                    >
                      Clear
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}
                <td key={table.tableID}>{table.tableID}</td>
                {table.seatedCustID ? (
                  <td style={{ color: "#DC3545" }}>
                    <strong>{table.firstName}</strong>
                  </td>
                ) : (
                  <td style={{ color: "#28A745" }}>
                    <strong>Available</strong>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Waiting</h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Seat Customer</th>
              <th scope="col">Customer</th>
              <th scope="col">Table#</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.waiting.map(cust => (
              <tr key={cust.custID}>
                {this.state.openTables.indexOf(cust.tableID) !== -1 ? (
                  <td>
                    <button
                      key={cust.custID}
                      onClick={() => this.seatCustomer(cust)}
                      className="btn btn-success seat"
                    >
                      Seat
                    </button>
                  </td>
                ) : (
                  <td style={{ color: "#DC3545" }}><strong>Table Occupied</strong></td>
                )}
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
