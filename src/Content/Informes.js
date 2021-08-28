import React, { Component, PureComponent } from 'react';
import classes from './Informes.module.css';
import AnimatedNumber from 'react-animated-number';
import {
  Line,
  ComposedChart,
  Bar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, ResponsiveContainer } from 'recharts';

const iclass = ["fas fa-poll","fas fa-chart-line","fas fa-money-check-alt","fas fa-business-time","fas fa-arrow-left"];

const data = [
  {
    name: 'lunes',
    unidades: 125,
    Hs: 15,
    prod: 8.33,
  },
  {
    name: 'Martes',
    unidades: 170,
    Hs: 20,
    prod: 8.5,
  },
  {
    name: 'Miércoles',
    unidades: 167,
    Hs: 15,
    prod: 11.13,
  },
  {
    name: 'Jueves',
    unidades: 145,
    Hs: 15,
    prod: 9.6,
  },
  {
    name: 'Viernes',
    unidades: 196,
    Hs: 20,
    prod: 9.8,
  },
  {
    name: 'Sábado',
    unidades: 239,
    Hs: 20,
    prod: 11.95,
  },
  {
    name: 'Domingo',
    unidades: 316,
    Hs: 20,
    prod: 15.8,
  },
];

const dataRend = [
  {
    item: 'Exp. Cliente',
    esperado: 95,
    anterior: 82.5,
    actual: 75,
    fullMark: 100,
  },
  {
    item: 'Venta',
    esperado: 92.1,
    anterior: 95.7,
    actual: 63.4,
    fullMark: 100,
  },
  {
    item: 'Stock',
    esperado: 95,
    anterior: 77.4,
    actual: 90.4,
    fullMark: 100,
  },
  {
    item: 'Calidad',
    esperado: 98,
    anterior: 87.8,
    actual: 89.3,
    fullMark: 100,
  },
  {
    item: 'Envíos',
    esperado: 98,
    anterior: 97.1,
    actual: 94.2,
    fullMark: 100,
  }
];

const ProductosBarChart = () =>{
  return (
    <ResponsiveContainer width="98%" height={300}>
      <ComposedChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" contentStyle={{color: '#0D3024'}}/>
        <YAxis />
        <Tooltip contentStyle={{
                    backgroundColor:'#e5e5e5',
                    border:'none'}}
                    labelStyle={{color: '#0D3024'
                }}/>
        <Legend verticalAlign="top" />
        <Bar dataKey="unidades" stackId="a" fill="#52B788" />
        <Bar dataKey="Hs" stackId="a" fill="#95D5B2" />
        <Line dataKey="prod" stroke="#fdb849" strokeWidth={3}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
}

const RendimientoRadialChart = () =>{
  return(
    <ResponsiveContainer width="98%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRend}>
          <PolarGrid />
          <PolarAngleAxis dataKey="item" stroke="#0D3024"/>
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Operación Óptima" dataKey="esperado" stroke="#fdb849" fill="#fdb849" fillOpacity={0.6} />
          <Radar name="Mes Anterior" dataKey="anterior" stroke="#af52b8" fill="#af52b8" fillOpacity={0.6} />
          <Radar name="Operación Actual" dataKey="actual" stroke="#52B788" fill="#52B788" fillOpacity={0.6} />
          
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
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
            <a>
              <div className={classes.cardSubTitle}>
                <h2>Informe de Productividad</h2>
                <i className={iclass[3]}></i>
              </div>
              
              <div className={classes.cardInfo}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </a>

          </div>
        </div>
                
        <div>
          <div className={classes.card} onClick={()=> this.onOptionClick(3)}>
            <a>
              <div className={classes.cardSubTitle}>
                <h2>Informe de Ventas</h2>
                <i className={iclass[2]}></i>
              </div>
              
              <div className={classes.cardInfo}>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>  
        </div>
          <div className={classes.card} onClick={()=> this.onOptionClick(4)}>
            <a>
              <div className={classes.cardSubTitle}>
                    <h2>Informe de Calidad y Rendimiento</h2>
                    <i className={iclass[1]}></i>
              </div>
              <div className={classes.cardInfo}>
                  <p>Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
              </div>
            </a>
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

        <div className={classes.DiaContainer}>
          
          <div>
            
            <div className={classes.InformeCard}>
              <h2>Informe Diario</h2>
              <div className={classes.InformeTab}>
                <div>
                    <h4>Medio de Pago</h4>
                    <p>Efectivo</p>
                    <p>Online</p>  
                </div>
                <div>
                    <h4>Cantidad</h4>
                    <p>12</p>
                    <p>23</p>
                </div>
                <div>
                    <h4>Valor</h4>
                    <p>$37500</p>
                    <p>$215000</p>
                    
                </div>
              </div>
              <div className = {classes.InformeSubTo}>
                <h2>Subtotal</h2>
                <h2>$238500</h2>
              </div>
          </div>
            
            <div className={classes.ObjetivosContainer}>
                      <div className={[classes.Objetivos,classes.InformeCard].join(" ")}>      
                      <h4>Objetivo Diario</h4>
                      <div className={classes.ObjInfo}>
                        <p>$223432</p>
                        <h4 className={classes.ObjLogrado}>+6.74%</h4>
                      </div>
                    </div>

                      <div className={[classes.Objetivos,classes.InformeCard].join(" ")}>
                      <h4>Objetivo Mensual</h4>
                      <div className={classes.ObjInfo}>
                        <p>$3504200</p>
                        <h4 className={classes.ObjNoLogrado}>-32.3%</h4>
                      </div>
                    </div>
                    </div>
          </div>
          
    
          <div>
            <div className={classes.InformeCard}>
                <div className={classes.TopProducts}>
                  <h2>Más vendidos</h2>
                  <div className={classes.TopProductsInfo}>

                    <div>
                      <p>1. Producto A1</p>
                      <p>2. Producto B3</p>
                      <p>3. Producto C2</p>
                    </div>

                    <div>
                      <p>24</p>
                      <p>17</p>
                      <p>13</p>
                    </div>

                  </div>
                  


                  

                </div>
              </div>
          </div>

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

        <div className={classes.InformeProd}>
          
          <div className={classes.GraphCard}>
            <h2>Acumulado Semanal</h2>
            {ProductosBarChart()}
          </div>
          
          <div>
            <div className={classes.GraphCard}>
              <h2>Hoy</h2>
              <div className={classes.GraphCardInfo}>
                <div>
                  <p>Productividad</p>
                  <p>Tickets</p>
                  <p>Hs Colaboradores</p>
                </div>
                <div>
                  <p><AnimatedNumber
                                value={15.8}
                                initialValue ={0.0}
                                duration = {1100}
                                formatValue={n => n.toFixed(1)}
                            /></p>
                  <p><AnimatedNumber
                                value={316}
                                initialValue ={0.0}
                                duration = {1100}
                                formatValue={n => n.toFixed(0)}
                            /></p>
                  <p><AnimatedNumber
                                value={20}
                                initialValue ={0.0}
                                duration = {1100}
                                formatValue={n => n.toFixed(1)}
                            /></p>
                </div>
                
              </div>
              
            </div>
          </div>

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
         <div className={classes.InformeCard}>
            <h2>Informe de Ventas</h2>
            <div className={classes.InformeVentaTab}>
                <div>
                  <h4>Sku</h4>
                  <p>0001</p>
                  <p>0006</p>
                  <p>0009</p>
                  <p>0010</p>
                  <p>0005</p>
                  <p>0002</p>
                  <p>0003</p>
                  <p>0011</p>

                </div>

                <div>
                  <h4>Producto_id</h4>
                  <p>Producto A1</p>
                  <p>Producto B3</p>
                  <p>Producto C2</p>
                  <p>Producto C3</p>
                  <p>Producto B2</p>
                  <p>Producto A2</p>
                  <p>Producto A3</p>
                  <p>Promo 1</p>
                </div>

                <div>
                  <h4>Categoría</h4>
                  <p>A</p>
                  <p>B</p>
                  <p>C</p>
                  <p>C</p>
                  <p>B</p>
                  <p>A</p>
                  <p>A</p>
                  <p>Promos</p>
                </div>

                <div>
                  <h4>Cantidad</h4>
                  <p>24</p>
                  <p>17</p>
                  <p>13</p>
                  <p>9</p>
                  <p>9</p>
                  <p>6</p>
                  <p>3</p>
                  <p>2</p>
                </div>

                <div>
                  <h4>Valor</h4> 
                  <p>$120345</p>
                  <p>$38034</p>
                  <p>$29041</p>
                  <p>$22500</p>
                  <p>$16445</p>
                  <p>$7235</p>
                  <p>$2555</p>
                  <p>$2345</p>
                </div>
              </div>

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
          
        <div className={classes.InformeCard}>
          <h2>Calidad y Rendimiento</h2>
          
          <div className={classes.RendContent} > 

            {RendimientoRadialChart()}
            <div className={classes.GraphCardInfo}>
              
              <div>
                <p>Exp. Cliente</p>
                <p>Venta</p>
                <p>Stock</p>
                <p>Calidad</p>
                <p>Envíos</p>
              </div>

              <div className={classes.RendVals}>
                <p>
                  <AnimatedNumber
                    value={75}
                    initialValue ={0.0}
                    duration = {1100}
                    formatValue={n => n.toFixed(1)}
                  /> {"%"}
                </p>
                <p>
                  <AnimatedNumber
                    value={63.4}
                    initialValue ={0.0}
                    duration = {1100}
                    formatValue={n => n.toFixed(1)}
                  /> {"%"}
                </p>
                <p>
                  <AnimatedNumber
                    value={90.4}
                    initialValue ={0.0}
                    duration = {1100}
                    formatValue={n => n.toFixed(1)}
                  /> {"%"}
                </p>
                <p>
                  <AnimatedNumber
                    value={89.3}
                    initialValue ={0.0}
                    duration = {1100}
                    formatValue={n => n.toFixed(1)}
                  /> {"%"}
                </p>
                <p>
                  <AnimatedNumber
                    value={94.2}
                    initialValue ={0.0}
                    duration = {1100}
                    formatValue={n => n.toFixed(1)}
                  /> {"%"}
                </p>
                
              </div>                
            
            </div>

          </div>

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
