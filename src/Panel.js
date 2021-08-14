import React from 'react';
import classes from './Panel.module.css';


const Panel = (props)=>{

    const PanelOptions = props.data.PanelOptions.map((item,pos) =>{
        const classArr = [classes.PanelLinks];
        if (pos === props.currentSelectedOption && props.activeOptionSection){
            classArr.push(classes.PanelLinkSelected);
        }
        return(
            <a key={pos} className={classArr.join(' ')} onClick={()=>props.onOptionClick(pos)}>
                    <i className={item.iclass}></i>
                    <p>{item.option}</p>
            </a>
        );
    }
    )

    const PanelSecOptions = props.data.SecOptions.map((item,pos) =>{
        const classArr = [classes.PanelSecLinks];
        if (pos === props.currentSelectedSecOption && !props.activeOptionSection){
            classArr.push(classes.PanelSecLinkSelected);
        }
        return(
            <a key={pos} className={classArr.join(' ')} onClick={()=>props.onSecOptionClick(pos)}>
                <i className={item.iclass}></i>
                <p>{item.option}</p>
            </a>
        );
    }
    )


    return(
        <div className ={classes.panelContainer}>
            
            <div className={classes.Logo}>
                <i class="fas fa-mortar-pestle"></i>
                <p>MyCompany</p>
            </div>

            <div className={classes.PanelNav}>
                <hr className={classes.Hr}></hr>
                {PanelOptions}
            </div>
            <hr className={classes.Hr}></hr>

            {PanelSecOptions}
            
            
            <p className={classes.copy}><a href="https://github.com/JuanBoho" target="_blank">by JuanBoho, 2021</a> </p>

        </div>

        

        
    );
}

 export default Panel;