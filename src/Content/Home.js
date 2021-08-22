import React, {useState } from 'react';
import classes from './Home.module.css';
import AnimatedNumber from 'react-animated-number'
import { LineChart, Line,BarChart, PieChart, Pie, Cell, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/*--Utilidades--*/
/*---Data--*/
const data = [
    {
      name: 'Ene',
      ingresos: 6473,
    },
    {
      name: 'Feb',
      ingresos: 26020,
    },
    {
      name: 'Mar',
      ingresos: 21546,
    },
    {
      name: 'Abr',
      ingresos: 27981,
    },
    {
      name: 'May',
      ingresos: 16990,
    },
    {
      name: 'Jun',
      ingresos: 28492,
    },
    {
      name: 'Jul',
      ingresos: 36671,
    },
  ];
const data02 =[{name: 'Positivas', value: 652} , {name: 'Negativas', value: 54}];

const CustomExpColors = ["hotpink","rgba(255, 105, 180, 0.529)"];
const CusExpPercentages= (data)=>{
    var values =[];
    let percentages = []

    data.map((item,ix)=>{
        values.push(item.value);
    })

    let values_sum = values.reduce(function (a, b){return a + b;}, 0);
    
    values.map( (item,ix)=>{ percentages.push( (item * 100) / values_sum) } )

    return(
        percentages
    );
    }

/*---Grahp Generators--*/
/*Line Chart*/
const IngresosLineChart = ()=>{
    
    return(
        <ResponsiveContainer width="98%" height={300}>
            <LineChart 
            data={data}
            margin={{
            top: 15,
            right: 10,
            left: 15,
            bottom: 5,
            }}
        >                  
            <XAxis 
                dataKey="name" 
                axisLine={false} tickLine={false} 
                padding={{ left: 15 }}
                style={{fill:'#FFF'
                }}
            />
            
            <YAxis
                domain={['auto', 'auto']}
                axisLine={false} 
                tickLine={false}
                ticks={[0,10000,20000,30000,40000]}
                style={{fill:'#FFF'
                }}
            />

            <Tooltip 
                contentStyle={{
                    backgroundColor:'#000000ea',
                    border:'none'}}
                    labelStyle={{color: '#FFF'
                }}
            />
            
            <Line 
                type="monotone" 
                dataKey="ingresos" 
                stroke="hotpink" 
                dot={false}
                />

        </LineChart>
        </ResponsiveContainer> );
}
/*PieChart*/
const CustomExpPieChart = ()=>{
    return(
        <ResponsiveContainer width="99%" height={180}>
        <PieChart width="100%" height="100%">
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={65}>
                { data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CustomExpColors[index]} stroke ="none"/>
                    ))
                }
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}

/*-----------------------HOME--------------------------------*/
const Home = ()=>{

    return(
        <div className={classes.Container}>

            <div className={classes.cardsContainer}>
                <div className={classes.card}>
                    <h2>Ordenes</h2>
                    <div className={classes.cardSub}>
                        <p>Recibidas</p>
                        <h4>
                            <AnimatedNumber
                                value={841}
                                initialValue ={0}
                                duration = {600}
                                style={{
                                    fontSize: 20
                                }}
                                formatValue={n => n.toFixed(0)}
                            />
                        </h4>
                    </div>
                    <div className={classes.cardSub}>
                        <p>Completadas</p>
                        <p><AnimatedNumber
                                value={836}
                                initialValue ={0}
                                duration = {600}
                                formatValue={n => n.toFixed(0)}
                            />
                        </p>
                    </div>
                </div>

                <div className={classes.card}>
                    <h2>Ventas</h2>

                    <div className={classes.cardSub}>
                            <p>Totales</p>
                            <h4>
                                <AnimatedNumber
                                value={1247}
                                initialValue ={0}
                                duration = {800}
                                formatValue={n => n.toFixed(0)}
                                />
                            </h4>
                    </div>
                    <div className={classes.cardSub}>
                            <p>Este mes</p>
                            <p>
                                <AnimatedNumber
                                value={36}
                                initialValue ={0}
                                duration = {800}
                                formatValue={n => n.toFixed(0)}
                                />
                            </p>
                    </div>
                    
                </div>

                <div className={classes.card}>
                    <h2>Ingresos</h2>
                    <div className={classes.cardSub}>
                        <p>Totales</p>
                        <h4>$
                            <AnimatedNumber
                                value={238673.92}
                                initialValue ={0}
                                duration = {1200}
                                formatValue={n => n.toFixed(2)}
                            />
                        </h4>
                    </div>
                    <div className={classes.cardSub}>
                        <p>Este mes</p>
                        <p>$
                            <AnimatedNumber
                                value={28945.16}
                                initialValue ={0}
                                duration = {1200}
                                formatValue={n => n.toFixed(2)}
                            />
                        </p>
                    </div>
                </div>

                <div className={classes.card}>
                    <h2>Saldo</h2>
                    <div className={classes.cardSub}>
                        <p>Disponible</p>
                        <h4>$
                        <AnimatedNumber
                                value={128432.64}
                                initialValue ={0}
                                duration = {1500}
                                formatValue={n => n.toFixed(2)}
                            />
                        </h4>
                        
                    </div>
                    <div className={classes.cardSub}>
                        <p>Inversiones</p>
                        <p>$
                            <AnimatedNumber
                            value={110241.28}
                            initialValue ={0}
                            duration = {1500}
                            formatValue={n => n.toFixed(0)}
                            />
                        </p>
                    </div>
                    <p></p>
                </div>
            </div>  
            
            <div className={classes.graphContainer}>
            
                <div className={classes.Homegraph}>
                    <h4>Ingresos</h4>
                    <div className={classes.graphVentas}>
                        <IngresosLineChart/>
                    </div>
                </div>
            
                <div className={classes.Homegraph}>
                    <h4>Opiniones</h4>

                    <div className={classes.graphCustExp}>
                        <h2>{data02[0].value + data02[1].value}</h2>
                        <CustomExpPieChart/>
                    </div>

                    <div className={classes.CustExpStats}>
                            
                        <div className={classes.CustExpStatsPos}>
                            <h4>{Math.round(CusExpPercentages(data02)[0] * 100)/100 +"%"}</h4>
                            <p>{data02[0].name}</p>
                        </div>
                        <div className={classes.CustExpStatsNeg}>
                            <h4>{Math.round(CusExpPercentages(data02)[1] * 100)/100 +"%"}</h4>
                            <p>{data02[1].name}</p>
                        </div>
                    </div>
                    
                </div>

            </div>
           
        </div>
    );
}

export default Home;