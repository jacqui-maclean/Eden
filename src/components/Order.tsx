import { Order } from "./OrderList";

interface Props {
  item: Order;
}

const ListItem = ({ item }: Props) => {
  return (
    <tr>
      <td>{item.order_reference}</td>
      <td>{item.order_value}</td>
    </tr>
  );
};

export default ListItem;
