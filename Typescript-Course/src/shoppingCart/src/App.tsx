import './App.css'
import { ProductsProvider } from './contexts/ProductsProvider'

function App() {

  return (
    <ProductsProvider>
      <h1>Shopping Cart</h1>
    </ProductsProvider>
  )
}

export default App
