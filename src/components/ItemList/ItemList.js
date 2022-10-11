import Item from "../Item/Item"

const ItemList = ({productos}) => {
    
    return (
        <div>
            {productos.map(prod => 
            <Item 
            key={prod.id}
            name={prod.name}
            img={prod.img}
            category={prod.category}
            price={prod.price}
            float={prod.float}
            condition={prod.condition}
            />)}
        </div>
    )
}

export default  ItemList