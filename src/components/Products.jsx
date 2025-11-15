import { useContext, useEffect } from "react";
import fetchProducts from "../api/fetchProducts";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import AppContext from "../context/AppContext";

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      const response = await fetchProducts();
      setProducts(response);

      setLoading(false);
    };

    loadProducts();
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="max-w-[1100px] my-0 mx-auto pt-[120px] px-5 pb-[50px] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
