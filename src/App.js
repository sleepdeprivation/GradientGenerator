import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var gradStyle = {
    background: 'linear-gradient(to right, red, yellow)',
    height:     '400px'
};

class GradientInput extends Component {

    constructor(props){
        super(props);
        this.state = {color : "green"};
    }

    setColor(){
        this.setState({color : "blue"});
    }

    colorChanged(event){
        this.setState({color: event.target.value});
    }

  render() {
    return (
        <div>
            <input  className="GradientInput"
                    value={this.state.color}
                    onChange={this.colorChanged} ></input>
                <button onClick={this.setColor.bind(this)}>
                    REFRESH</button>
        </div>
    );
  }
}


    GradientInput.defaultProps = {
        color: 'blue'
    }




class Gradient extends Component {
  render() {
    return (
      <div className="GradientBox" style={gradStyle}>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <GradientInput />
          <GradientInput />
          <Gradient/>
      </div>
    );
  }
}



export default App;
