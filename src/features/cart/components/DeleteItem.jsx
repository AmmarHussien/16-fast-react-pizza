import { useDispatch } from 'react-redux';
import Button from '../../../ui/components/Button';
import { deleteItem } from '../cartSlice';

function DeleteItem({ pizzaId, children }) {
  const dispatch = useDispatch();

  if (children)
    return (
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        {children}
      </Button>
    );
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
