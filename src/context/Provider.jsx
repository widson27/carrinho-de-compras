import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types';

function Provider({ children }) {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCartVisible, setIsCartVisible] = useState(true)
  const [isRepet, setIsRepet] = useState(false)
  const [repetItems, setRepetItems] = useState([])


  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    isRepet,
    setIsRepet,
    repetItems,
    setRepetItems,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
