import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import moment from 'moment';
import Search from './Search.jsx';
import Report from './Report.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReceived: false,
      portrait: '',
      signData: '',
      yearsAgo: '',
      name: ''
    }

    this.sendAstro = this.sendAstro.bind(this)
    this.whatToRender = this.whatToRender.bind(this)
  }

  sendAstro(name, birthdate, hour, minute, geo) {
    // this.setState({
    //
    // });
    console.log(this, "this");
        console.log('BIRTHDATE????', birthdate.toObject());

    axios.post( '/astrology', {
      name: name,
      birthdate: birthdate.toObject(),
      hour: hour,
      minute: minute,
      loc: geo
    })
    .then((response) => {
      console.log(response, 'axios response');
      // console.log(">>>", response.data.portrait, "<<<");
      this.setState({
        responseReceived: true,
        portrait: JSON.parse(response.data.portrait),
        signData: JSON.parse(response.data.signData),
        birth: birthdate,
        name: name,
      })
    })
    .catch(function (error) {
      console.log(error, 'axios error');
    });
  }

  componentDidMount() {

  }

  whatToRender() {
    if (this.state.responseReceived) {
      return (<Report
        portrait={this.state.portrait}
        signData={this.state.signData}
        birth={this.state.birth}
        name={this.state.name}
      />)
    } else {
      return (<Search sendAstro={this.sendAstro}/>)
    }
  }

  render () {
    return (
      <div>
        <h1>Z is for Zodiac</h1>
        {this.whatToRender()}
        <select>
          <option value="Quentin">Quentin</option>
        </select>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
