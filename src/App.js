import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppData from './AppData/AppData'
import Panel from './Panel';
import ContentDisplay from './Content/ContentDisplay';



class App extends Component{
  
  
  state = {
    AppData: AppData,
    currentSelectedOption: 0,
    currentDisplayPos: 0
  }

  onOptionClick = (pos) =>{
    this.setState({currentSelectedOption : pos});
    this.setState({currentDisplayPos: pos});
  }

  
  /*--Utilities--*/
  dates ={
    currentDate: new Date().toDateString(),
    currentHour: new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours(),
    currentMinutes: new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
  }


  render(){
    return (
      <div className="App">
        
        <Panel  data={this.state.AppData} 
          onOptionClick = {this.onOptionClick} 
          currentSelectedOption = {this.state.currentSelectedOption}/>
        
        <div className="Dash-display">
          <div className="HourDateBanner">
            <h2>{this.dates.currentHour + ':' + this.dates.currentMinutes}</h2>
            <p>{this.dates.currentDate}</p>
          </div>
          <ContentDisplay currentDisplayPos = {this.state.currentDisplayPos}/>
        </div>
      
      </div>
    );
  }
}

export default App;
