import { useContext } from "react";
import CartItem from "./CartItem";
import AppContext from "../context/AppContext";
import formatCurrency from "../utils/formatCurrency";

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`flex flex-col justify-between w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 pt-[100px] px-[20px] pb-[20px] translate-x-[110%] translate-y-[0] transition-all duration-[400ms] ease-[ease] ${isCartVisible && "translate-x-[0]"}`}>
      <div className="flex-grow overflow-auto">
        {cartItems.map((cartItem) => <CartItem className='' key={cartItem.id} data={cartItem} />)}
      </div>
      <div className="text-[1.8rem] font-medium pt-[35px] px-0 pb-[15px] border-t border-t-solid border-t-[#ddd]">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  );
}

export default Cart;