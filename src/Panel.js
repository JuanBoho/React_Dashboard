import React from 'react';
import classes from './Panel.module.css';


const Panel = (props)=>{
    

    const PanelMainOptions = props.data.PanelOptions.map((item,pos) =>{
        
        const classArr = [classes.PanelLinks];

        if(item.optionType === 'main'){
            if (pos === props.currentSelectedOption){
                classArr.push(classes.PanelLinkSelected);
            }
            return(
                <a key={pos} className={classArr.join(' ')} onClick={()=>props.onOptionClick(pos)}>
                    <i className={item.iclass}></i>
                    <p>{item.option}</p>        
                </a>
            );
        }

        
    }
    )   

    const PanelSecOptions = props.data.PanelOptions.map((item,pos) =>{
  
        const classArrSec = [classes.PanelSecLinks];
        if (item.optionType === 's  ec'){    
            if (pos === props.currentSelectedOption){
                classArrSec.push(classes.PanelSecLinkSelected);
            }
            return(
                <a key={pos} className={classArrSec.join(' ')} onClick={()=>props.onOptionClick(pos)}>
                    <i className={item.iclass}></i>
                    <p>{item.option}</p>
                </a>
            );
        }
    })

    const PanelOptions = [PanelMainOptions, PanelSecOptions];




    return(
        <div className ={classes.panelContainer}>
        
        <div className={classes.Logo}>
            <i class="fas fa-mortar-pestle"></i>
            <p>MyCompany</p>
        </div>

        <div className={classes.PanelNav}>
            <hr className={classes.Hr}></hr>
            {PanelOptions[0]}
        </div>
        <hr className={classes.Hr}></hr>

        {PanelOptions[1]}
        
        
        <p className={classes.copy}><a href="https://github.com/JuanBoho" target="_blank">by JuanBoho, 2021</a> </p>

    </div>
    );

}

 export default Panel;