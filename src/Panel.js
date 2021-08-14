import React from 'react';
import classes from './Panel.module.css';


const Panel = (props)=>{

  /*  const colorOptions = props.data.colorOptions.map((item,pos) =>{
        const classArr = [classes.ProductOption];
        if (pos === props.currentPreviewImagePos){
            classArr.push(classes.ProductOptionSelected);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    }
    )
*/

    return(
        <div className ={classes.panelContainer}>
            
            <div className={classes.Logo}>
                <i class="fas fa-mortar-pestle"></i>
                <p>MyCompany</p>
            </div>

            <div className={classes.PanelNav}>
                <hr className={classes.Hr}></hr>
                <a className={classes.PanelLinks}>
                    <i class="fas fa-home"></i>
                    <p>Home</p>
                </a>
                <a className={classes.PanelLinks}>
                    <i class="far fa-chart-bar"></i>
                    <p>Informes</p>
                </a>
                <a className={classes.PanelLinks}>
                    <i class="fas fa-shipping-fast"></i>
                    <p>Pedidos</p>
                </a>
                <a className={classes.PanelLinks}>
                    <i class="far fa-clock"></i>
                    <p>Horarios</p>
                </a>
                <a className={classes.PanelLinks}>
                    <i class="fas fa-clipboard-list"></i>
                    <p>Productos</p>
                </a>
            </div>
            <hr className={classes.Hr}></hr>

            <a className={classes.PanelSecLinks}>
                    <i class="far fa-question-circle"></i>
                    <p>Preguntas Frecuentes</p>
            </a>

            <a className={classes.PanelSecLinks}>
                    <i class="far fa-question-circle"></i>
                    <p>Centro de Ayuda</p>
            </a>
            
            
            <p className={classes.copy}>by JuanBoho, 2021 </p>

        </div>

        

        
    );
}

 export default Panel;