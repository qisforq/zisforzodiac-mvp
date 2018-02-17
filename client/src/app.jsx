import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.sendAstro = this.sendAstro.bind(this)
  }

  sendAstro(name, birthdate, hour, minute) {
    // axios.post()
    console.log(`sendAstro!`);
    axios.post( '/astrology', {
      name: name,
      birthdate: birthdate,
      hour: hour,
      minute: minute
    })
    .then(function (response) {
      console.log(response, 'axios response');
    })
    .catch(function (error) {
      console.log(error, 'axios error');
    });
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>
        <h1>Z is for Zodiac</h1>
        <h3>Learn about who you are!</h3>
        <Search sendAstro={this.sendAstro}/>
        <select>
          <option value="Quentin">Quentin</option>
        </select>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
