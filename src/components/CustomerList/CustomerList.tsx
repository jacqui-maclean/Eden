import { useEffect, useState } from "react";
import { API_KEY } from "../../../secret-consts";
import ListItem from "../ListItem";
import Search from "../Search";
import Modal from "../Modal/modal";
import "./CustomerList.css";

export interface Customer {
  customer_email: string;
  customer_id: string;
  customer_name: string;
  no_orders: string;
}

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>();
  const [found, setFound] = useState<Customer>();
  const [showOrders, setShowOrders] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "https://eve.edenpetfoods.com/api/customers",
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        let results = await response.json();
        let customers = results.Response;
        setCustomers(customers);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchCustomers();
  }, []);

  const handleSearch = (searchTerm: string) => {
    let foundCustomer = customers?.filter(
      (customer) => customer.customer_name == searchTerm
    );
    if (foundCustomer) {
      setFound(foundCustomer[0]); //making a simple assumption for now that there is only one match in each search
    }
  };

  const handleRequest = (a: string) => {
    setShowOrders(true);
    setCustomerId(a);
    const selectedCustomer = customers!.filter(
      (customer) => customer.customer_id == a
    );
    setCustomerName(selectedCustomer[0].customer_name);
  };

  let customerList: Customer[] | undefined = found
    ? customers?.filter(
        (customer) => customer.customer_name !== found.customer_name
      )
    : customers;

  return isError ? (
    <h3>Error! Please try again later</h3>
  ) : (
    <div className="container text-center">
      <div className="row mainContainer">
        <Search onSearch={handleSearch} />

        <table className="table px-2">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Orders</th>
            </tr>
          </thead>
          <tbody>
            {found ? (
              <ListItem
                item={found}
                key={found.customer_id}
                searchReturn={true}
                onRequest={handleRequest}
              />
            ) : null}
            {customerList?.map((customer) => (
              <ListItem
                item={customer}
                searchReturn={false}
                key={customer.customer_id}
                onRequest={handleRequest}
              />
            ))}
          </tbody>
        </table>
      </div>
      <main>
        <Modal
          customerId={customerId}
          show={showOrders}
          handleClose={() => setShowOrders(false)}
          customerName={customerName}
        ></Modal>
      </main>
    </div>
  );
};

export default CustomerList;
