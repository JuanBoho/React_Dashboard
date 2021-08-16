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

  render(){
    return (
      <div className="App">
        
        <Panel  data={this.state.AppData} 
          onOptionClick = {this.onOptionClick} 
          currentSelectedOption = {this.state.currentSelectedOption}/>
        
        <div className="Dash-display">
          <ContentDisplay currentDisplayPos = {this.state.currentDisplayPos}/>

        </div>
      
      </div>
    );
  }
}

export default App;
