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
        if (item.optionType === 'sec'){    
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
            <aside>
                <div className={classes.Logo}>
                    <i class="fas fa-mortar-pestle"></i>
                    <p>MyCompany</p>
                </div>

                <div className={classes.PanelNav}>
                    <hr className={classes.Hr}></hr>
                    {PanelOptions[0]}
                </div>
                

                <div className={classes.SecOptions}>
                    <hr className={classes.Hr}></hr>
                    {PanelOptions[1]}
                </div>
                
                
                <a className={classes.copy} href="https://github.com/JuanBoho" target="_blank">
                    
                    <i className="fab fa-creative-commons"></i>
                    <p >by JuanBoho, 2021</p>
                </a> 
            </aside>
        </div>
    );

}

 export default Panel;