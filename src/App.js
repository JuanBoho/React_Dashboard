import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppData from './AppData/AppData'
import Panel  from './Panel';

class App extends Component{
  
  state = {
    AppData: AppData,
    currentSelectedOption: 0,
    activeOptionSection: true, //Control opciones Select opc primarias 
    currentSelectedSecOption: 0,
    
  }

  onOptionClick = (pos) =>{
    this.setState({currentSelectedOption : pos});
    this.setState({activeOptionSection : true});
  }

  onSecOptionClick = (pos) =>{
    this.setState({currentSelectedSecOption : pos});
    this.setState({activeOptionSection : false});
  }

  render(){
    return (
      <div className="App">
        
        <Panel  data={this.state.AppData} onOptionClick = {this.onOptionClick} currentSelectedOption = {this.state.currentSelectedOption} activeOptionSection = {this.state.activeOptionSection} onSecOptionClick = {this.onSecOptionClick} currentSelectedSecOption = {this.state.currentSelectedSecOption}/>
        
        <div className="Dash-display">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Cambio de sección</p>
        </div>
      
      </div>
    );
  }
}

export default App;
