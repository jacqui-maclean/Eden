import { useEffect, useState } from "react";
import { API_KEY } from "../../secret-consts";
import Order from "./Order";
// import "./OrderList.css";

export interface Order {
  order_reference: string;
  order_value: string;
  customer_name: string;
}

interface Props {
  customerId: string;
  customerName: string;
}

const OrderList = ({ customerId, customerName }: Props) => {
  const [orders, setOrders] = useState<Order[]>();
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://eve.edenpetfoods.com/api/orders?customer=" + customerId,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      let results = await response.json();
      let orders = results.Response;
      setOrders(orders);
    };
    fetchOrders();
  }, [customerId]);

  return (
    <div className="container text-center">
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        <h4 className="">Orders for {customerName}</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Ref</th>
              <th scope="col">Order Value</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <Order item={order} key={order.order_reference} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
