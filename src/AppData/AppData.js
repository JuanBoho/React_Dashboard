const AppData = {

    company: 'MyCompany',
    srcLogo: 'fas fa-mortar-pestle',
    PanelOptions: [
        {
            option: 'Home',
            iclass: 'fas fa-home'
        },
        {
            option: 'Informes',
            iclass: 'far fa-chart-bar'
        },
        {
            option: 'Pedidos',
            iclass: 'fas fa-shipping-fast'
        },
        {
            option: 'Horarios',
            iclass: 'far fa-clock'
        },
        {
            option: 'Productos',
            iclass: 'fas fa-clipboard-list'
        }
    ],
    SecOptions: [
        {
            option: 'Preguntas Frecuentes',
            iclass: 'https://imgur.com/iOeUBV7.png'
        },
        {
            option: 'Centro de Ayuda',
            iclass: 'https://imgur.com/PTgQlim.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(AppData); //This line of code just makes your object as a constant. No values can be updated.

export default AppData;