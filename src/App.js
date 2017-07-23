import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//https://www.paulirish.com/2009/random-hex-color-code-snippets/
var randomHex = function(){ return '#'+Math.floor(Math.random()*16777215).toString(16);};

class GradientInput extends Component {

  constructor(props){
      super(props);
  }

  setColor(){
      console.log("settingColor")
      this.props.updateColor(randomHex());
  }

  colorChanged(event){
      this.props.updateColor(event.target.value);
  }

  render() {
      console.log("rendering");
    return (
        <div>
            <input  className="GradientInput"
                    value={this.props.color}
                    onChange={this.colorChanged.bind(this)} ></input>
                <button onClick={this.setColor.bind(this)}>
                    REFRESH</button>
        </div>
    );
  }
}

var gradStyle = function(left, right){
  return {
    background: 'linear-gradient(to right, '+left+', '+right+')',
    height:     '400px'
  };
};
class Gradient extends Component {
  render() {
    console.log("rendering css gradient");
    return (
      <div  className="GradientBox"
            style={gradStyle(this.props.color1, this.props.color2)} >
      </div>
    );
  }
}

class App extends Component {

  constructor(props){
      super(props);
      this.state = (
          {
            'color1' : this.props.color1,
            'color2' : this.props.color2
          });
  }

  updateState(which){
      return function(arg){
          console.log("updated", which, arg);
          var obj = {};
          obj[which] = arg;
          this.setState( obj );
          console.log(this.state);
      }
  }

  render() {
    return (
      <div className="App">
          <GradientInput
              color={this.state.color1}
              updateColor={this.updateState('color1').bind(this)}
          />
          <GradientInput
              color={this.state.color2}
              updateColor={this.updateState('color2').bind(this)}
          />
          <Gradient color1={this.state.color1} color2={this.state.color2}/>
      </div>
    );
  }
}

App.defaultProps = {
    color1: randomHex(),
    color2: randomHex()
}



export default App;
