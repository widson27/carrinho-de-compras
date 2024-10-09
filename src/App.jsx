import './App.css'
import Cabecalho from './components/Cabecalho'
import Cart from './components/Cart';
import Products from './components/Products';
import Provider from './context/Provider';

function App() {
  return (
    <Provider className='w-full h-screen'>
      <Cabecalho />
      <Products />
      <Cart />
    </Provider>
  )
}

export default App;
