const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      console.error("Erro ao buscar produtos. Status:", response.status);
      return [];
    }

    const data = await response.json();
    return data; // já é uma lista de produtos
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};

export default fetchProducts;
