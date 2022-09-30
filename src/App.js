import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
       <Navbar />
       <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
