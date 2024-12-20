import { axiosInstance } from "../utils/axiosInstance";

import ProductsContainer from "../components/ProductsContainer";

// loader
export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const products = req.data.products;
  return { products };
};

function Home() {
  return <ProductsContainer />;
}

export default Home;
