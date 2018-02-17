import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import _ from 'underscore'
import 'react-datepicker/dist/react-datepicker.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthdate: moment("06-16-1991", "MM-DD-YYYY"),
      hour: 12,
      minute: '',
      amHours: _.range(0, 12),
      pmHours: _.range(12, 24),
      minutes: _.range(0, 60)
    }
    this.search = this.search.bind(this)
    this.dateChange = this.dateChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (...args) {
    args[1].preventDefault()
    let obj = {};
    obj[args[0]] = args[1].target.value
    this.setState(obj);
    console.log(args[1].target.value);
  }

  dateChange (date) {
    // date.preventDefault()
    this.setState({
      birthdate: date
    });
  }

  search() {
    // this.setState({})
    let {name, birthdate, hour, minute} = this.state;
    this.props.sendAstro(name, birthdate, hour, minute)//{day, month, year, hour, minute}
  }

  render() {
    return (
      <div>
        <h4>Relinquish personal info here:</h4>
        <form onSubmit={this.search}>
          <label>
            Name: <br />
            <input
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.onChange.bind(this, 'name')}
            /><br />
          </label>
            <br />
          <label>
            Birthdate:
          </label>
            <DatePicker
              placeholderText="Birthday"
              selected={this.state.birthdate}
              onChange={this.dateChange}
              showYearDropdown
            />
          <br />
          <label>
            Birth time (hours and minutes):&nbsp;&nbsp;
          </label>
            <select value={this.state.hour} onChange={this.onChange.bind(this, 'hour')}>
              <option value={this.state.amHours[0]}>I don't know!</option>
              {
                this.state.amHours.map((hour, i) => {
                  if (i !== 0) return <option key={i} value={hour}>{hour} AM</option>
                })
              }
              <option value={this.state.pmHours[0]}>12 PM</option>
              {
                this.state.pmHours.map((hour, i) => {
                  if (i !== 0) return <option key={i} value={hour}>{hour-12} PM</option>
                })
              }
              <option value={this.state.amHours[0]}>12 AM</option>
            </select>
          <label >&nbsp;&nbsp;min</label>
          <input value={this.state.minute} placeholder="Minutes" onChange={this.onChange.bind(this, 'minute')}/>
          <br />
        </form>
        <button onClick={this.search}>Submit</button>
      </div>)
  }
}
// React.createElement('input', {
//   type: 'email',
//   className: errors.email && 'ContactForm-error',
//   placeholder: 'Email (required)',
//   value: this.props.value.email,
//   onChange: this.onEmailChange,
// })
// 'date': 10,
// 'month': 12,
// 'year': 1993,
// 'hour': 1,
// 'minute': 25,
// 'latitude': 25,
// 'longitude': 82,
// 'timezone': 5.5

export default Search;
