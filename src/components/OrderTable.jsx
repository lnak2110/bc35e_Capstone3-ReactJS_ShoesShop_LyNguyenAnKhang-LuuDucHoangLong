import React from 'react';

const OrderTable = ({ order }) => {
  return (
    <div className="order-table table-responsive">
      <h3 className="order-table-title">
        Order has been placed on {order.date}
      </h3>
      <table className="table text-center">
        <thead>
          <tr className="table-secondary">
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.orderDetail.map((product) => (
            <tr key={product.id} className="align-middle">
              <td>{product.id}</td>
              <td style={{ width: 120 }}>
                <img
                  className="img-fluid"
                  src={product.image}
                  alt={product.name}
                />
              </td>
              <td className="align-middle">{product.name}</td>
              <td className="align-middle">$ {product.price}</td>
              <td className="align-middle">
                <span className="quantity py-1 mx-3">{product.amount}</span>
              </td>
              {/* <td className="align-middle">
                      $ {product.price * product.amount}
                    </td> */}
            </tr>
          ))}
          {/* <tr className="table-info">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="align-middle">{cartAmount}</td>
                  <td className="align-middle">$ {cartTotalPrice}</td>
                  <td className="align-middle">
                    <button
                      className="btn-order"
                      onClick={() => submitOrder(cartProducts, userLogin.email)}
                    >
                      submit order
                    </button>
                  </td>
                </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
