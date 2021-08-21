import React, {Component} from 'react';
import classes from './Productos.module.css'
import Switch from "react-switch";

/*--Utilities--*/
/*Switch*/
class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch 
        offHandleColor = "#FDB849"
        onHandleColor = "#000"
        activeBoxShadow ="0 0 2px 3px #333"
        height = {20}
        onColor = "#FDB849"
        offColor = "#333"
        
        onChange = {this.handleChange} 
        checked = {this.state.checked}/>
      </label>
    );
  }
}

const Productos = (props)=>{

    const ProdCat = [];
    
    props.data.Productos.map((category, ix) => {
        
        let Cat = category.Cat;
        let CatItems = category.items;
        console.log(CatItems);

        ProdCat.push(
            <div className={classes.card}>
                <h2>{Cat}</h2>
                <div className={classes.cardSubTitle}>
                    <h4>Item</h4>
                    <h4>Disponible</h4>
                </div>

            {
                CatItems.map((item,pos) =>{
                    console.log(CatItems[pos].name);
                    return( 
                            <div className={classes.cardInfo}>
                                <div className={classes.Producto}>
                                    <p>{CatItems[pos].name}</p>
                                    <p className={classes.Itemsku}>{"SKU " + CatItems[pos].sku}</p>
                                </div>
                                
                                <div className={classes.SwitchContainer}>
                                    <SwitchExample/>
                                </div>

                            </div>
                    );
                })
            }

            </div>
        )
    })


            
      
    return(
        <div className={classes.Container}>
           <div className={classes.CardsContainer}>
                <div className={classes.Catalogo}>
                        {ProdCat[1]}
                        {ProdCat[2]}
                        {ProdCat[3]}
                </div>

                <div className={classes.Promo}>
                        {ProdCat[0]}
                </div>
           </div>
        </div>  
    );
}

export default Productos;