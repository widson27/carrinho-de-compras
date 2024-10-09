import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "../utils/formatCurrency";
import propTypes from 'prop-types'
import { useContext } from "react";
import AppContext from "../context/AppContext";

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext)
  const { id, thumbnail, title, price, quantity } = data;


  const handleRemoveItem = () => {
    if (quantity > 1) {
      // Se o item tiver mais de 1 unidade, apenas reduz a quantidade
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      // Se a quantidade for 1, remove o item completamente
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
    }
  };



  return (
    <section className="flex items-start border-b border-solid border-[#ddd] pb-5 mb-5 relative last:border-b-0 ">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="w-[70px]"
      />

      <div className="py-0 pr-[35px] pl-[10px]">
        <h3 className="text-[0.85rem] font-medium text-[rgba(0,0,0,0.5] mb-2">{title}</h3>
        <h3 className="text-[25px] font-medium">{formatCurrency(price, 'BRL')}</h3>
        {(quantity > 1 && <span className="text-[1rem] font-medium text-[rgba(0,0,0,0.7)]">Quantidade: {quantity}</span>)}  {/* Exibe a quantidade */}

        <button
          type="button"
          className="absolute top-0 right-0 text-[#d83232] text-[1.4rem] border-none bg-none cursor-pointer"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;