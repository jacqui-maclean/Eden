import OrderList from "../OrderList";
import "./modal.css";

interface Props {
  handleClose: () => void;
  customerId: any;
  show: boolean;
  customerName: string;
}

const Modal = ({ handleClose, show, customerId, customerName }: Props) => {
  let showHideClassName = show
    ? "customModal display-block"
    : "customModal display-none";
  return (
    <div className={showHideClassName}>
      <section className="customModal-main">
        <OrderList customerId={customerId} customerName={customerName} />
        <button type="button" onClick={handleClose} className="btn btn-primary">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
