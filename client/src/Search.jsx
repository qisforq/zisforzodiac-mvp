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
      geo: '',
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
    let {name, birthdate, hour, minute, geo} = this.state;
    this.props.sendAstro(name, birthdate, hour, minute, geo)//{day, month, year, hour, minute}
  }

  render() {
    return (
      <div>
        <h3>Learn about who you are!</h3>
        <h4>Relinquish personal info here:</h4>
        <form onSubmit={this.search}>
          <label>
            <h5>
              Name:&nbsp;<br/>
              <input
                type="text"
                value={this.state.name}
                placeholder="Name"
                onChange={this.onChange.bind(this, 'name')}
              />
            </h5>
          </label>
          <label>
            <h5>
              Birthdate:
              <DatePicker
                placeholderText="Birthday"
                selected={this.state.birthdate}
                onChange={this.dateChange}
                showYearDropdown
              />
            </h5>
          </label>
          <label>
            <h5>
              Birth time:
            </h5>
            hours:&nbsp;&nbsp;
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
          <label><br/>
          <br/>minutes:&nbsp;&nbsp;
          </label>
          <input value={this.state.minute} placeholder="Minutes" onChange={this.onChange.bind(this, 'minute')}/>
          <br />
          <br />
          <label>
            <h5>
              Place of birth:&nbsp;<br/>
              <input
                value={this.state.geo}
                placeholder="City/State"
                onChange={this.onChange.bind(this, 'geo')}
              />
            </h5>
          </label>

        </form>
        <button onClick={this.search}>Submit</button>
      </div>)
  }
}
// NEXT: You Must still add an input form to enter city of birth, and then have geocoder convert that into latitude and longitude coordinates.

// 'date': 10,
// 'month': 12,
// 'year': 1993,
// 'hour': 1,
// 'minute': 25,
// 'latitude': 25,
// 'longitude': 82,
// 'timezone': 5.5

export default Search;
