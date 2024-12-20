import { Link, useLoaderData } from "react-router";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";

function ProductsContainer() {
  const { addProduct, selectedProducts } = useGlobalContext();
  const { products } = useLoaderData();

  const buyProduct = (e, prod) => {
    e.preventDefault();
    const product = selectedProducts.find((product) => prod.id == product.id);
    if (product) {
      toast.warn("❌Youuu body! You already have this product!❌");
      return;
    }
    addProduct({ ...prod, amount: 1 });
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10">
      {products.map((prod) => {
        return (
          <Link
            to={`/singleproduct/${prod.id}`}
            key={prod.id}
            className="card bg-base-100 shadow-xl w-full"
          >
            <figure>
              <img src={prod.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-2xl">{prod.title}</h2>
              <p>${prod.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={(e) => buyProduct(e, prod)}
                  className="btn btn-primary btn-sm md:btn-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
