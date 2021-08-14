const AppData = {

    company: 'MyCompany',
    srcLogo: 'fas fa-mortar-pestle',
    PanelOptions: [
        {
            id: 0,
            option: 'Home',
            iclass: 'fas fa-home'
        },
        {
            id: 1,
            option: 'Informes',
            iclass: 'far fa-chart-bar'
        },
        {   
            id: 2,
            option: 'Pedidos',
            iclass: 'fas fa-shipping-fast'
        },
        {
            id: 3,
            option: 'Horarios',
            iclass: 'far fa-clock'
        },
        {
            id: 4,
            option: 'Productos',
            iclass: 'fas fa-clipboard-list'
        }
    ],
    SecOptions: [
        {   
            id: 1,
            option: 'Preguntas Frecuentes',
            iclass: 'far fa-question-circle'
        },
        {
            id: 2,
            option: 'Centro de Ayuda',
            iclass: 'fas fa-headset'
        },
    ]
}

Object.freeze(AppData); //This line of code just makes your object as a constant. No values can be updated.

export default AppData;