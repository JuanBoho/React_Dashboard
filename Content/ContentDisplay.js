import React from 'react';
import Home from './Home';
import Informes from './Informes';
import Pedidos from './Pedidos';
import Horarios from './Horarios';
import Productos from './Productos';
import CentroAyuda from './CentroAyuda';

const ContentDisplay = (props)=>{

    const screens = [<Home/>, <Informes/>, <Pedidos data={props.data}/>, <Horarios data={props.data}/>, <Productos data={props.data}/>, <CentroAyuda/>]

    return(
        screens[props.currentDisplayPos]
    );
}

export default ContentDisplay;