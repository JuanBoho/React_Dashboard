import React, { Component, PureComponent } from 'react';
import classes from './Informes.module.css'
import { BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const iclass = ["fas fa-poll","fas fa-business-time","fas fa-money-check-alt","fas fa-chart-line","fas fa-arrow-left"];

/*
const ProductosBarChart = () =>{
  return(
      <ResponsiveContainer width="99%" height={250}>
          <BarChart  data={data} margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
          }}>
          <XAxis dataKey="name" 
              axisLine={false}
              tickLine={false}
              style={{fill:'#FDB849'
              }}/>
          <Tooltip 
              cursor={{
                  fill:'none'}}
              contentStyle={{backgroundColor:'#000000ea',
                             border:'none'}}
              labelStyle={{color: '#FDB849'}}
          />
          <Bar dataKey="ventas" fill="#FDB849"   />
      </BarChart>
      </ResponsiveContainer>
  );
}
*/

const InformeVentas = ()=> {
  return(
    <div>
      <p>No data</p>
    </div>
  );
}

class Informes extends Component{
  
  state ={
    CurrentDisplayOption : 0
  }

  onOptionClick = (pos) =>{
    this.setState({CurrentDisplayOption: pos});
  }
  
  InformesHome = ()=>{
      return(
       <div className={classes.CardsContainer}>
        <div>
          <div className={classes.card} onClick={()=> this.onOptionClick(1)}>
            <div className={classes.cardSubTitle}>
                  <h2>Informe Final del Día</h2>
                  <i className={iclass[0]}></i>
            </div>
            <div className={classes.cardInfo}>
                <p>Lorem ipsum dolor sit amet, consectetur Faucibus turpis in eu mi bibendum.</p>
            </div>
          </div>
          <div className={classes.card} onClick={()=> this.onOptionClick(2)}>
                <div className={classes.cardSubTitle}>
                  <h2>Informe de Productividad</h2>
                  <i className={iclass[3]}></i>
                </div>
                
                <div className={classes.cardInfo}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
          </div>
        </div>
                
        <div>
          <div className={classes.card} onClick={()=> this.onOptionClick(3)}>
                <div className={classes.cardSubTitle}>
                  <h2>Informe de Ventas</h2>
                  <i className={iclass[2]}></i>
                </div>
                
                <div className={classes.cardInfo}>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
        </div>
          <div className={classes.card} onClick={()=> this.onOptionClick(4)}>
            <div className={classes.cardSubTitle}>
                  <h2>Informe de Rendimiento</h2>
                  <i className={iclass[1]}></i>
            </div>
            <div className={classes.cardInfo}>
                <p>Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
            </div>
          </div>
        </div>
        
      </div>
      );
  }
  
  InformeDia = ()=>{
    return(
      <div className={classes.CardsContainer}>
         <div className={classes.InformesTitle} onClick={()=> this.onOptionClick(0)}>
           <div className={classes.Volver}>
              <i className={iclass[4]}></i>
              <p>Volver</p>
           </div>
         </div>

         <div >
            <p>Informe del Día</p>
         </div>
       </div>
     );
  }

  InformeProductividad= ()=>{
    return(
      <div className={classes.CardsContainer}>
         <div className={classes.InformesTitle} onClick={()=> this.onOptionClick(0)}>
            <div className={classes.Volver}>
              <i className={iclass[4]}></i>
              <p>Volver</p>
            </div>
         </div>
         <div>
            <p>Informe Productividad</p>
         </div>
       </div>
     );
  }

  InformeVentas = ()=>{
    return(
      <div className={classes.CardsContainer}>
         <div className={classes.InformesTitle} onClick={()=> this.onOptionClick(0)}>
            <div className={classes.Volver}>
              <i className={iclass[4]}></i>
              <p>Volver</p>
            </div>
         </div>
         <div>
            <p>Informe de Ventas</p>
         </div>
       </div>
     );
  }

  InformeRendimiento = ()=>{
    return(
      <div className={classes.CardsContainer}>
         <div onClick={()=> this.onOptionClick(0)}>
            <div className={classes.Volver}>
              <i className={iclass[4]}></i>
              <p>Volver</p>
            </div>
         </div>
         <div>
            <p>Informe de Rendimiento</p>
         </div>
       </div>
     );
  }


  render(){

    switch(this.state.CurrentDisplayOption) {
      case 0:
        return(
          <div className={classes.Container}>
            {this.InformesHome()}
          </div>
        );
        
        break;
      case 1:
        return(
          <div className={classes.Container}>
            {this.InformeDia()}
          </div>
        );
        break;
      case 2:
        return(
          <div className={classes.Container}>
            {this.InformeProductividad()}
          </div>
        );
        break;
      case 3:
        return(
          <div className={classes.Container}>
            {this.InformeVentas()}
          </div>
        );
        break;
      case 4:
        return(
          <div className={classes.Container}>
            {this.InformeRendimiento()}
          </div>
        );
        break;
      default:
        return(
          <div className={classes.Container}>
            {this.InformesHome()}
          </div>
        );
    }}
}

export default Informes;
