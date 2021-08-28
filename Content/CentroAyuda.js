import React from 'react';
import classes from './CentroAyuda.module.css'


const Socialiclass =["fas fa-headset","fas fa-envelope","fab fa-instagram","fab fa-twitter","fab fa-whatsapp"];

const Optioniclass = ["far fa-question-circle","fas fa-user-cog", "fas fa-wallet", "fas fa-dolly-flatbed", "fas fa-lock"]
const CentroAyuda = ()=>{

    return(

        <div className={classes.Container}>
            

            <div className={classes.HelpTop}>
                <h1 className={classes.HelpTitle}>¿En qué podemos ayudarte?</h1>
                <div className={classes.HelpOptions}>

                    <div className={classes.HOption}>
                        <a>
                            <i className={Optioniclass[0]}></i>
                            <p>Preguntas frecuentes</p>
                        </a>
                    </div>

                    <div className={classes.HOption}>
                        <a>
                            <i className={Optioniclass[1]}></i>
                            <p>Configuración de la cuenta</p>
                        </a>
                    </div>

                    <div className={classes.HOption}>
                        <a>
                            <i className={Optioniclass[2]}></i>
                            <p>Depósitos y Extracciones</p>
                        </a>
                    </div>

                    <div className={classes.HOption}>
                        <a>
                            <i className={Optioniclass[3]}></i>
                            <p>Pedidos y Envíos</p>
                        </a>
                    </div>

                    <div className={classes.HOption}>
                        <a>
                            <i className={Optioniclass[4]}></i>
                            <p>Política de Privacidad</p>
                        </a>
                    </div>

                </div>
            </div>
            
            
            <div className={classes.HelpBottom}>

                <div className={classes.TutorialContainer}>
                    <div className={classes.HOption}>
                        <h4>Tutoriales</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, morbi phasellus ut habitant auctor sociis sed justo, varius nunc interdum facilisis euismod sapien.</p>
                    </div>
                </div>

                <div className={classes.ContactoItems}>
                        <div className={classes.ContactoItem}>
                            <i className={Socialiclass[0]}></i>
                            <p>0800-1111-2222</p>
                        </div>
                        <div className={classes.ContactoItem}>
                            <i className={Socialiclass[1]}></i>
                            <p>contact@dashboard.com</p>
                        </div>
                        <div className={classes.ContactoItem}>
                            <i className={Socialiclass[2]}></i>
                            <p>/dash_react</p>
                        </div>
                        <div className={classes.ContactoItem}>
                            <i className={Socialiclass[3]}></i>
                            <p>/react_dash</p>
                        </div>
                        <div className={classes.ContactoItem}>
                            <i className={Socialiclass[4]}></i>
                            <p>(+54) 11 1234-5678</p>
                        </div>
                    </div>
            </div>
        
        </div>
        
    );
}

export default CentroAyuda;