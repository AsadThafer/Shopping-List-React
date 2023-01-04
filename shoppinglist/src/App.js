import './App.css';
import Navbar from './components/Navbar';
import ProductsMenu from './components/ProductsMenu';

function App() {
  return (
    <div className="App">
     <Navbar />
     <main>
    <ProductsMenu /> 
    </main>
    </div>
  );
}

export default App;
