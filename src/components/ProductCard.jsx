import { FaCartPlus } from "react-icons/fa";
import propTypes from 'prop-types'
import formatCurrency from "../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ProductCard({ data }) {
  const { price, title, image } = data;

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    const itemExists = cartItems.find((item) => item.id === data.id);

    if (itemExists) {
      // Incrementa a quantidade do item existente
      const updatedCart = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Adiciona o novo item com quantidade inicial de 1
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };



  return (
    <section className="group w-full max-w-[300px] bg-[#fff] flex flex-col cursor-pointer my-0 mx-auto relative hover:shadow-xl ">
      <img className="w-full" src={image} alt={title} />
      <div className="p-5 border-solid border-t border-[#ddd]">
        <h2 className="text-3xl font-normal block mb-[10px]">{formatCurrency(price, "BRL")}</h2>
        <h2 className="text-[15px] text-[rgba(0,0,0,0.5)] font-medium leading-[1.5] ">{title}</h2>
      </div>

      <button className="hidden group-hover:flex items-center justify-center absolute top-0 right-0 w-[45px] h-[45px] my-3 mx-[15px] text-[#0c5dd6] border-none rounded-[50px] bg-[rgba(255,255,255,0.8)] text-2xl"
        type="button"
        onClick={handleAddCart}
      >
        <FaCartPlus />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;