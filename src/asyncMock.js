// import Ak47 from "../public/img/Ak47.png"
// import Mac10 from "../public/img/Mac-10.png"
// import Awp from "../public/img/Awp.png"


const productos = [
    {
        id: "1",
        name: "AK-47 | Loto silvestre",
        price: "$1000",
        category: "Rifles",
        float: "0.017574873",
        condition: "Algo desgastado",
        img: "https://cs.money/img/main/webp/ak-1750.webp",
        stock: "1",
        description: "Potente y confiable, el AK-47 es uno de los rifles de asalto más famosos del mundo",
    },

    {
        id: "2",
        name: "AWP | Hiperbestia",
        price: "$2000",
        category: "Rifles",
        float: "0.77546753",
        condition: "Recien fabricado",
        img: "https://cdn1.dotesports.com/wp-content/uploads/2022/01/21055511/Dualies-1024x699.png",
        stock: "1",
        description: "El infame AWP es reconocible por su característico sonido y su política de «un tiro, una muerte».",   
    },

    {
        id: "3",
        name: "MAC-10 | Acechador",
        price: "$3000",
        category: "Sub fusiles",
        float: "1.33487258",
        condition: "Bastante desgastado",
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_nightwish_light_large.0c4581be094e2bd732bec18ebdad2f71b1018af2.png",
        stock: "1",
        description: "El subfusil MAC-10 cuenta con una gran cadencia de disparo, pero su precisión no es muy buena y su retroceso es muy elevado",
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 1000)
    })
}
