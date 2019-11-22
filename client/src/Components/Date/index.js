import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './style.css';

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="Date-">
          <div className="Date-Layout-align-right">
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
          isCalendarOpen={true}
          
        />
        </div>
      </div>
    );
  }
}

export default MyApp