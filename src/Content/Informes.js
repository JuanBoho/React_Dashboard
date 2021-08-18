import React, { PureComponent } from 'react';
import classes from './Informes.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

const Informes = ()=> {
  return(
    <div className={classes.Container}>
      <div>
        
      </div>
    </div>
  );
}

export default Informes;
