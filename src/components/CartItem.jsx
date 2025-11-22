import { CiTrash } from "react-icons/ci";
import Select from "../components/Select";
import { QTY, SIZE } from "../constant";

export default function CartItem({
  item: { product, qty, size },
  onClickTrash,
}) {
  return (
    <div className="dark:hover:bg-night-50 cursor-pointer space-y-2 bg-gray-50 hover:bg-[#DAFFA2] dark:bg-transparent">
      <div className="P-2 flex space-x-2">
        {/* Image */}
        <img className="h-24" src={product.src} alt="" />
        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold dark:text-white dark:hover:text-black">
            {product.title}
          </div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={size}
              title=""
              options={SIZE}
              className={"w-16 p-1 pl-2"}
            ></Select>
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            ></Select>
          </div>
        </div>
        <button
          onClick={() => {
            onClickTrash(product.id);
          }}
        >
          <CiTrash size={25} className="text-black dark:text-white"></CiTrash>
        </button>
      </div>
    </div>
  );
}
