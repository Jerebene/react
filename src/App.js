import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import Navbar from "./components/Navbar/Navbar"
// import Counter from "./components/Counter/Counter"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  // const addToCar = () => {
  //   console.log('agregamos al carrito')
  // }

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
         <Routes>
             <Route path="/" element={<ItemListContainer />} />
             <Route path="/detalle/:Id" element={<ItemDetailContainer />} />
             
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

