import React from 'react';
import './style.css';
// import '../../routes/apiRoutes';
import axios from 'axios';



class Seating extends React.Component {
  
  constructor() {
    super();
      this.state = {
      seat: [
         1, 2, 3,
         4, 5, 6,
         7, 8, 9
      ],
      seatAvailable: [
       
      ],
      seatReserved: []
    }
  }

  componentDidMount(){
    axios.get('/api/available-tables',{
        data: {
          date: '2019-10-25',
          time: '18:30',
          partySize: 2
        }
      }).then(response => console.log(response))
    }
  
  
  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      })
    }
  }
  
  render() {
    return (
      <div className="rest-">
        <div className="rest-Layout">
          <h1>Seat Reservation System</h1>
             <DrawGrid 
                  seat = { this.state.seat }
                  available = { this.state.seatAvailable }
                  reserved = { this.state.seatReserved }
                  onClickData = { this.onClickData.bind(this) }
          />
          </div>
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="rest">
        <h2>hello</h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>
        
        <AvailableList available = { this.props.available } />
        <ReservedList reserved = { this.props.reserved } />
       </div>
    )
  }
  
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="rest-available">
        <h4>Available Seats: ({seatCount === 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
  }
}

class ReservedList extends React.Component {
  render() {
    return(
      <div className="rest-reserved">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul>
      </div>
    )
  }
}

export default Seating;