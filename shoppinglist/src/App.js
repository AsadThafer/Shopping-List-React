import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductsMenu from './components/ProductsMenu';

function App() {
  return (
    <div className="App">
     <Navbar />
     <main>
    <ProductsMenu /> 
    <Cart />
    </main>
    </div>
  );
}

export default App;
