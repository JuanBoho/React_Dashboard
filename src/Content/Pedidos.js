import { classExpression } from '@babel/types';
import React from 'react';
import classes from './Pedidos.module.css'


const Pedidos = ()=>{

    return(
        <div className={classes.Container}>
            <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>Camila Castelli</p>
                    <p>09:23</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i class="fas fa-box"></i>12345</p>
                    <p><i class="fas fa-phone-alt"></i>(+54) 11 5555-5555</p>
                    <p><i class="fas fa-map-marker-alt"></i>Almirante Brownie 1371, 2F</p>
                    <p><i class="fas fa-dolly"></i>En camino</p>
                    <a><p>Ver</p></a>
                </div>
            </div>
            <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>Camila Castelli</p>
                    <p>09:23</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i class="fas fa-box"></i>12345</p>
                    <p><i class="fas fa-phone-alt"></i>(+54) 11 5555-5555</p>
                    <p><i class="fas fa-map-marker-alt"></i>Almirante Brownie 1371, 2F</p>
                    <p><i class="fas fa-dolly"></i>En camino</p>
                    <a><p>Ver</p></a>
                </div>
            </div>
            <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>Camila Castelli</p>
                    <p>09:23</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i class="fas fa-box"></i>12345</p>
                    <p><i class="fas fa-phone-alt"></i>(+54) 11 5555-5555</p>
                    <p><i class="fas fa-map-marker-alt"></i>Almirante Brownie 1371, 2F</p>
                    <p><i class="fas fa-dolly"></i>En camino</p>
                    <a><p>Ver</p></a>
                </div>
            </div>
            <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>Camila Castelli</p>
                    <p>09:23</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i class="fas fa-box"></i>12345</p>
                    <p><i class="fas fa-phone-alt"></i>(+54) 11 5555-5555</p>
                    <p><i class="fas fa-map-marker-alt"></i>Almirante Brownie 1371, 2F</p>
                    <p><i class="fas fa-dolly"></i>En camino</p>
                    <a><p>Ver</p></a>
                </div>
            </div>
            <div className={classes.Pedido}>
                <div className={classes.PedidoTitle}>
                    <p>Camila Castelli</p>
                    <p>09:23</p>
                </div>
                
                <div className={classes.PedidoInfo}>
                    <p><i class="fas fa-box"></i>12345</p>
                    <p><i class="fas fa-phone-alt"></i>(+54) 11 5555-5555</p>
                    <p><i class="fas fa-map-marker-alt"></i>Almirante Brownie 1371, 2F</p>
                    <p><i class="fas fa-dolly"></i>En camino</p>
                    <a><p>Ver</p></a>
                </div>
            </div>

        </div>
    );
}

export default Pedidos;