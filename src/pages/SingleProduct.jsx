import { useLoaderData } from "react-router";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div className="card card-side bg-base-100 shadow-xl my-auto">
      <figure>
        <img src={product.thumbnail} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <h2 className="card-title">Brand name: {product.brand}</h2>
        <p>Description: {product.description}</p>
        <span className="text-lg font-bold">Price: ${product.price}</span>
        <span className="text-lg font-bold">
          Discount: {product.discountPercentage}%
        </span>
        <span className="text-lg font-bold">Rating: {product.rating}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
