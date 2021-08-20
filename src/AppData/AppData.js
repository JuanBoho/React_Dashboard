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
            id: 6,
            option: 'Centro de Ayuda',
            optionType: 'sec',
            iclass: 'fas fa-headset',
            display: 'CentroAyuda'
        },
    ],
    Orders:[
        {
            id:0,
            pedido: '0001248',
            hora: '09:32',
            nombre: 'Carlos Malaver',
            direc: 'Pastor 347',
            tel: '(+54) 11 3333-3333',
            estado: 'Entregado'
        },
        {
            id:1,
            pedido: '0001249',
            hora: '09:48',
            nombre: 'María Pérez',
            direc: 'Paseo del Pozo 1240, 6B',
            tel: '(+54) 11 2233-4455',
            estado: 'En camino'
        },
        {
            id:3,
            pedido: '0001250',
            hora: '09:53',
            nombre: 'Daniela Pineda',
            direc: 'Alicia Villaflor 845, 4F',
            tel: '(+54) 11 4433-1122',
            estado: 'En sucursal'
        },
        {
            id:4,
            pedido: '0001251',
            hora: '10:06',
            nombre: 'José Villegas',
            direc: 'Av. Alvear 2331, local 013',
            tel: ' 15 8888-3333',
            estado: 'En camino'
        },
        {
            id:5,
            pedido: '0001252',
            hora: '10:24',
            nombre: 'Claudia Rojas',
            direc: 'Libertadores 4332, 2A',
            tel: '(+54) 11 1555-8866',
            estado: 'En camino'

        }
    ],
    OrdersIcons:[
        "fas fa-box",
        "fas fa-phone-alt",
        "fas fa-map-marker-alt",
        "fas fa-dolly"
    ],
    Feriados: [
        {
            id: 0,
            feriado: 'Año Nuevo',
            dia: '1 de Enero'
        },
        {
            id: 1,
            feriado: 'Carnaval',
            dia: '15 de Febrero'
        },
        {   
            id: 2,
            feriado: 'Carnaval',
            dia: '16 de Febrero'
        },
        {
            id: 3,
            feriado: 'Día del trabajador',
            dia: '1 de Mayo'
        },
        {
            id: 4,
            feriado: 'Día de la Independencia',
            dia: '9 de Julio'
        },
        {   
            id: 5,
            feriado: 'Navidad',
            dia: '25 de Diciembre'
        }
    ]
}

Object.freeze(AppData); //This line of code just makes your object as a constant. No values can be updated.

export default AppData;