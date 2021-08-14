import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Panel  from './Panel';

class App extends Component{
  
  /*state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: false
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureOptionClick = (pos) =>{
    this.setState({currentSelectedFeature : pos});
  }*/

  render(){
    return (
      <div className="App">
        
        <Panel/>
        
        <div className="Dash-display">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Cambio de sección</p>
        </div>
      
      </div>
    );
  }
}

export default App;
