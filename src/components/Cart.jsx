import CartItem from "./CartItem";
export default function Cart({ cartItem, onClickTrash }) {
  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItem.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </div>
  );
}
