import React, {PureComponent} from 'react';
import classes from './Home.module.css';
import { LineChart, Line,BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Ene',
      ventas: 1000,
    },
    {
      name: 'Feb',
      ventas: 2320,
    },
    {
      name: 'Mar',
      ventas: 2000,
    },
    {
      name: 'Abr',
      ventas: 2780,
    },
    {
      name: 'May',
      ventas: 1890,
    },
    {
      name: 'Jun',
      ventas: 2390,
    },
    {
      name: 'Jul',
      ventas: 3490,
    },
  ];

const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()  ;
const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

const Home = ()=>{

    return(
        
        <div className={classes.Container}>

            <p className={classes.HourBanner}>{`${currentHour}:${currentMinutes}`}</p>

            <div className={classes.cardsContainer}>
                <div className={classes.card}>
                    <h4>Pedidos</h4>
                    <hr></hr>
                    <p>8</p>
                </div>

                <div className={classes.card}>
                    <h4>Cancelados</h4>
                    <hr></hr>
                    <p>1</p>
                </div>

                <div className={classes.card}>
                    <h4>Sucursales en Operación</h4>
                    <hr></hr>
                    <p>2/2</p>
                </div>
            </div>  
            
            <div className={classes.graphContainer}>
            
                <div className={classes.Homegraph}>
                    <h4>Ventas</h4>
                
                    <div className={classes.graphVentas}>
                        <LineChart
                            width={600}
                            height={300}
                            data={data}
                            margin={{
                            top: 15,
                            right: 20,
                            left: 20,
                            bottom: 5,
                            }}
                        >
                            
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} tickLine={false} 
                                padding={{ left: 10 }}
                            />
                            
                            <YAxis
                                domain={['auto', 'auto']} 
                                axisLine={false} 
                                tickLine={false}
                                ticks={[0,1000,2000,3000,4000]}
                            />

                            <Tooltip 
                                contentStyle={{
                                    backgroundColor:'#000000ea',
                                    border:'none'}}
                                    labelStyle={{color: '#FDB849'
                                }}
                            />
                            
                            <Line 
                                type="monotone" 
                                dataKey="ventas" 
                                stroke="#FDB849" 
                                dot={false}
                            />

                        </LineChart>
                    </div>

                </div>
            
                <div className={classes.Homegraph}>
                    <h4>Productos</h4>
                    <div className={classes.graphProductos}>
                        <BarChart width={390} height={300} data={data} margin={{
                            top: 15,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                            <Tooltip 
                                contentStyle={{backgroundColor:'#000000ea',
                                               border:'none'}}
                                labelStyle={{color: '#FDB849'}}
                            />
                            <Bar dataKey="ventas" fill="#FDB849" />
                        </BarChart>
                    </div>
                </div>

            </div>
           

        </div>

        
    );
}

export default Home;