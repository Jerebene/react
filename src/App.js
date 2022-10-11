import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import Navbar from "./components/Navbar/Navbar"
import Counter from "./components/Counter/Counter"

function App() {

  const addToCar = () => {
    console.log('agregamos al carrito')
  }

  return (
    <div className="App">
       <Navbar />
       <ItemListContainer />
       <Counter onAdd={addToCar}/>
    </div>
  );
}

export default App;

