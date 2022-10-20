import { useState, useEffect } from "react"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListConteiner.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect (() => {
        getProductos().then(response => {
            setProductos(response)
            
        })
    },[])

    console.log(productos)

    const productosMap = productos.map(prod => <li key={prod.id} >{prod.name}</li>)
    console.log(productosMap)




    return <div>
              <h1 className="itemListTitle">Productos</h1>
              <div>
              <ItemList productos={productos} />
              </div>
           </div>
}

export default ItemListContainer 