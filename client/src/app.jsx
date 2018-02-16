import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <h1>Z is for Zodiac</h1>
        <h3>Learn about who you are!</h3>
        <Search/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
