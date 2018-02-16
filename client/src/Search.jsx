import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onChange.bind(this)
    this.search.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    this.setState({});
  }

  search() {
    this.setState({})
  }

  render() {
    return (
      <div>
        <h4>Relinquish personal info here:</h4>
        Name: <input value={this.state.name}/>
        <button onClick={this.search}>Submit</button>
      </div>)
  }
}

export default Search;
