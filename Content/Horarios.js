import React,{Component} from 'react';
import classes from './Horarios.module.css'
import Switch from "react-switch";

/*--Utilities--*/
/*Switch*/
class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch 
        offHandleColor = "#2d6a4f"
        onHandleColor = "#092018"
        activeBoxShadow ="0 0 2px 3px #333"
        height = {20}
        onColor = "#2d6a4f"
        offColor = "#092018"
        onChange = {this.handleChange} 
        checked = {this.state.checked}/>
      </label>
    );
  }
}

const Horarios = (props)=>{

    const Feriados = props.data.Feriados.map((item,pos) =>{
        
        return(
            <div className={classes.cardInfo}>
                <div className={classes.Feriado}>
                    <p>{item.feriado}</p>
                    <p className={classes.FeriadoDate}>{item.dia}</p>
                </div>
                <div className={classes.SwitchContainer}>
                    <SwitchExample/>
                </div>
            </div>
        );
        }
    )


    return(
        <div className={classes.Container}>
           <div className={classes.CardsContainer}>
                <div>

                    <div className={classes.card}>
                        <h2>Horarios</h2>
                        <div className={classes.cardSubTitle}>
                            <h4>Turno</h4>
                            <h4>Horario</h4>
                        </div>
                        <div className={classes.cardInfo}>
                            <p>Lunea a Viernes</p>
                            <p>07:00 a 21:00</p>
                        </div>
                        <div className={classes.cardInfo}>
                            <p>Domingos y Feriados</p>
                            <p>08:00 a 20:00</p>
                        </div>
                        


                    </div>

                    <div className={classes.card}>
                        <h2>Proveedores</h2>
                        <div className={classes.cardSubTitle}>
                            <h4>Proveedor</h4>
                            <h4>Horario</h4>
                        </div>
                        <div className={classes.cardInfo}>
                            <p>Proveedor A</p>
                            <p>Lunes 11:00</p>
                        </div>
                        <div className={classes.cardInfo}>
                            <p>Proveedor B</p>
                            <p>Jueves 08:00</p>
                        </div>
                    </div>

                </div>
                
                <div className={classes.card}>
                        <h2>Feriados</h2>
                        <div className={classes.cardSubTitle}>
                            <h4>Día</h4>
                            <h4>Disponibilidad</h4>
                        </div>
                        {Feriados}
                </div>

           </div>
        </div>
        
    );
}

export default Horarios;