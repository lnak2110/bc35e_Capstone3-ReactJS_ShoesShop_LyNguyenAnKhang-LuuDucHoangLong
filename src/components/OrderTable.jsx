import React from 'react';

const OrderTable = ({ order }) => {
  const convertDate = (dateFromApi) => {
    const date = new Date(dateFromApi);
    return date.toLocaleDateString();
  };

  return (
    <div className="order-table table-responsive mt-5">
      <h3 className="order-table-title mb-3">
        Order has been placed on {convertDate(order.date)}
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
            <tr key={product.name} className="align-middle">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
