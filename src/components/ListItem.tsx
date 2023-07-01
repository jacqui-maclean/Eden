import { Customer } from "./CustomerList/CustomerList";

interface Props {
  item: Customer;
  searchReturn: boolean;
  onRequest: (customer_id: string) => void;
}

const ListItem = ({ item, searchReturn, onRequest }: Props) => {
  const variableClass = searchReturn ? "p-3 bg-secondary-subtle" : "";
  return (
    <tr>
      <td className={variableClass}>{item.customer_id}</td>
      <td className={variableClass}>{item.customer_name}</td>
      <td className={variableClass}>{item.customer_email}</td>
      <td className={variableClass}>{item.no_orders}</td>
      <td className={variableClass}>
        <button
          className="btn btn-primary"
          onClick={() => onRequest(item.customer_id)}
        >
          View Orders
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
