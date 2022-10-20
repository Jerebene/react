import { useState, useEffect } from "react"
import { getProductoById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [productoId, setProductoId] = useState([])
    const { Id } = useParams()

    useEffect (() => {
        getProductoById(Id).then(response => {
            setProductoId(response)
            
        })
    },[Id])
    
    console.log(productoId)
    
    //   const productoIdMap = productoId.map(prod => <li>{prod.name}</li>)
    //   console.log(productoIdMap)




    return <div>
              <h1 className="itemListTitle">Bienvenidos</h1>
              <ItemDetail productoId={productoId} />
           </div>
}

export default ItemDetailContainer