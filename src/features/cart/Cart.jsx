import { Link } from 'react-router-dom';
import LinkButton from '../../ui/components/LinkButton';
import Button from '../../ui/components/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-3 py-4">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
