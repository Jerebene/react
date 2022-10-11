import './Item.css'

const Item = ({img, name, category, price, float, condition}) => {
    return (
        <div className='ItemContainer'>
            <img src={img} alt={name} style={{ width: 100}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            {/* <p>{price}</p>
            <p>{float}</p>
            <h4>{condition}</h4> */}
        </div>
    )
}
export default Item