import './Item.css'
import { Link } from "react-router-dom"

const Item = ({img, name, category, price, float, condition, id}) => {
    return (
        <div className='ItemContainer'>
            <img src={img} alt={name} style={{ width: 100}} />
            <h1>{name}</h1>
            <h3>{condition}</h3>
            <p>{price}</p>
            <Link to={`/detalle/${id}`}>Ver detalle</Link>
            {/* <p>{price}</p>
            <p>{float}</p>
            <h4>{condition}</h4> */}
        </div>
    )
}
export default Item