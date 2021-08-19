import React from 'react';
import classes from './Pedidos.module.css'


const Pedidos = (props)=>{


    const Orders = props.data.Orders.map((item,pos) =>{
        
            return(
                <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>{item.nombre}</p>
                    <p>{item.hora}</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i className={props.data.OrdersIcons[0]}></i>{item.pedido}</p>
                    <p><i className={props.data.OrdersIcons[1]}></i>{item.tel}</p>
                    <p><i className={props.data.OrdersIcons[2]}></i>{item.direc}</p>
                    <p><i className={props.data.OrdersIcons[3]}></i>{item.estado}</p>
                    <a><p>Ver</p></a>
                </div>
            </div>
            );
        }
    )


    return(
        <div className={classes.Container}>
            {Orders}
        </div>
    );
}

export default Pedidos;