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
    ],
    Productos:[
        {
            id:0,
            Cat: "Promos",
            items: [
                {
                    sku: "0011",
                    name: "Promo 1",
                    price: "$"+80

                },
                {
                    sku: "0012",
                    name: "Promo 2",
                    price: "$"+130
                },
                {
                    sku: "0013",
                    name: "Promo 3",
                    price: "$"+160
                },
                {
                    sku: "0014",
                    name: "Dcto Vimex",
                    price: "$"+65
                }
            ]
        },
        {
            id:1,
            Cat: "Categoría A",
            items: [
                {
                    sku: "0001",
                    name: "Producto A1",
                    price: "$"+100
                },
                {
                    sku: "0002",
                    name: "Producto A2",
                    price: "$"+100
                },
                {
                    sku: "0003",
                    name: "Producto A3",
                    price: "$"+100
                }
            ] 
        },
        {
            id:2,
            Cat: "Categoría B",
            items: [
                {
                    sku: "0004",
                    name: "Producto 1B",
                    price: "$"+150
                },
                {
                    sku: "0005",
                    name: "Producto 2B",
                    price: "$"+150
                },
                {
                    sku: "0006",
                    name: "Producto 3B",
                    price: "$"+150
                },
                {
                    sku: "0007",
                    name: "Producto 4B",
                    price: "$"+150
                },
            ] 
        },
        {
            id:3,
            Cat: "Categoría C",
            items: [
                {
                    sku: "0008",
                    name: "Producto 1C",
                    price: "$"+200
                },
                {
                    sku: "0009",
                    name: "Producto 2C",
                    price: "$"+200
                },
                {
                    sku: "0010",
                    name: "Producto 3C",
                    price: "$"+200
                },
            ] 
        }   
    ]
}

Object.freeze(AppData); //This line of code just makes your object as a constant. No values can be updated.

export default AppData;