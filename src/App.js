import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "..."};
  }

  componentDidMount() {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(myJson => {
        console.log(myJson);
        this.setState({name: myJson.name})
      });
  }

  render() {
    return (
      <div className="App">
        Message: {this.state.name}
      </div>
    );
  }
}

export default App;
