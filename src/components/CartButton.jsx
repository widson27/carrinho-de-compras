import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../context/AppContext";


function CartButton() {


  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      type="button"
      className="flex text-2xl items-center justify-center p-[5px] cursor-pointer bg-none relative ml-5 text-[#333]"
      onClick={() => { setIsCartVisible(!isCartVisible) }}
    >
      <FaShoppingCart />
      {totalItems > 0 && <span className="bg-red-500 text-white text-[11px] w-[15px] h-[15px] absolute top-0 left-0 font-semibold rounded-[15px] flex items-center justify-center ">{totalItems}</span>}

    </button>
  )
}

export default CartButton;

