const fetchProducts = async (query) => {
  try {
    const response = await fetch(`/ml-api/sites/MLB/search?q=${query}`);

    if (!response.ok) {
      console.error("Erro ao buscar produtos. Status:", response.status);
      return []; // evita quebrar o map
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro na requisição:", error);
    return []; // fallback seguro
  }
};

export default fetchProducts;
