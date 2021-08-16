const AppData = {

    company: 'MyCompany',
    srcLogo: 'fas fa-mortar-pestle',
    PanelOptions: [
        {
            id: 0,
            option: 'Home',
            optionType: 'main',
            iclass: 'fas fa-home',
            display: 'Home'
        },
        {
            id: 1,
            option: 'Informes',
            optionType: 'main',
            iclass: 'far fa-chart-bar',
            display: 'Informes'
        },
        {   
            id: 2,
            option: 'Pedidos',
            optionType: 'main',
            iclass: 'fas fa-shipping-fast',
            display: 'Pedidos'
        },
        {
            id: 3,
            option: 'Horarios',
            optionType: 'main',
            iclass: 'far fa-clock',
            display: 'Horarios'
        },
        {
            id: 4,
            option: 'Productos',
            optionType: 'main',
            iclass: 'fas fa-clipboard-list',
            display: 'Productos'
        },
        {   
            id: 5,
            option: 'Preguntas Frecuentes',
            optionType: 'sec',
            iclass: 'far fa-question-circle',
            display: 'PregFrec'
        },
        {
            id: 6,
            option: 'Centro de Ayuda',
            optionType: 'sec',
            iclass: 'fas fa-headset',
            display: 'CentroAyuda'
        },
    ]
}

Object.freeze(AppData); //This line of code just makes your object as a constant. No values can be updated.

export default AppData;