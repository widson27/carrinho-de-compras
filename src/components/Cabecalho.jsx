import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import CartButton from "./CartButton";
import fetchProducts from "../api/fetchProducts";
import AppContext from "../context/AppContext";

function Cabecalho() {

  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)

    const products = await fetchProducts(searchValue)

    setProducts(products)
    setLoading(false)
    setSearchValue('')

  }


  return (
    <header className="w-full top-0 fixed bg-yellow-300 z-[1]">
      <div className="max-w-[1100px] my-0 mx-auto flex justify-between items-center p-[20px] ">
        <form className="flex items-center justify-between bg-white gap-[13px] w-full max-w-[500px] shadow pr-[13px]">
          <input
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            type="search"
            placeholder="Pesquisar..."
            required
            className=" text-sm font-medium outline-none p-[13px] grow border-solid border-r border-r-[#ddd]"
          />
          <button type="submit" className="bg-none text-[1rem] flex justify-center items-center text-[#333]" onClick={handleSearch}>
            <FaSearch />
          </button>
        </form>
        <CartButton />
      </div>
    </header>
  )
}

export default Cabecalho;