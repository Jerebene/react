import "./ItemDetail.css"
import Counter from "../Counter/Counter"

const ItemDetail = ({productoId}) => {
    
    return (
        <div className="cartContainer">
            <img src={productoId.img} alt={productoId.name} style={{ width: 100}} />
            <h1>{productoId.name}</h1>
            <h3>{productoId.condition}</h3>
            <p>{productoId.description}</p>
            <p>{productoId.price}</p>
            <button>Ver detalle</button>
            <Counter />  
        </div>
                                                                                    
    )
}

export default  ItemDetail