import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function TableRow({ id, price, amount, title, brand, thumbnail }) {
  const { changeAmount, removeProduct } = useGlobalContext();
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand: {brand}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">{formatPrice(price)}</span>
      </td>
      <td>
        <div className="flex gap-5 items-center">
          <button
            className="btn btn-sm"
            onClick={() => changeAmount(id, "increase")}
          >
            +
          </button>
          <span className="text-xl">{amount}</span>
          <button
            className="btn btn-sm"
            onClick={() => {
              if (amount == 1) {
                removeProduct(id);
              } else {
                changeAmount(id, "decrease");
              }
            }}
          >
            -
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => removeProduct(id)}
          className="btn btn-success btn-xs"
        >
          delete
        </button>
      </th>
    </tr>
  );
}

export default TableRow;
