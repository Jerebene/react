import {useState} from "react"
import "./Counter.css"

const Counter = ({onAdd}) => {

    const [Result, setResult] = useState(0)

    const restar = () => {
        if (Result > 0) {
           setResult(Result - 1)  
        } 
    }

    const sumar = () => {
        setResult(Result + 1)
    }

    return (
        <nav>
            <div className="counter">
                <button onClick={restar}>-</button>
                <h1 className="result">{Result}</h1>
                <button onClick={sumar}>+</button>
            </div>
            <div className="addToCar">
                <button onClick={onAdd}>Agregar al carrito </button>
            </div>
        </nav>
        
    )
} 

export default Counter