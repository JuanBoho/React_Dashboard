import React from 'react';
import Home from './Home';
import Informes from './Informes';
import Pedidos from './Pedidos';
import Horarios from './Horarios';
import Productos from './Productos';
import PregFrec from './PregFrec';
import CentroAyuda from './CentroAyuda';

const ContentDisplay = (props)=>{

    const screens = [<Home/>, <Informes/>, <Pedidos/>, <Horarios/>, <Productos/>, <PregFrec/>, <CentroAyuda/>]

    return(
        screens[props.currentDisplayPos]
    );
}

export default ContentDisplay;