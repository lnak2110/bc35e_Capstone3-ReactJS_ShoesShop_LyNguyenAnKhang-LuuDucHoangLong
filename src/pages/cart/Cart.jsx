import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cartReducer);

  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart__title my-5 pb-4">Your Cart</h1>
        <table className="table cart__table text-center">
          <thead>
            <tr className="table-secondary">
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td style={{ width: 120 }}>
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle">
                  <button>+</button>
                  <span className="bg-light px-3">{product.amount}</span>
                  <button>-</button>
                </td>
                <td className="align-middle">
                  {product.price * product.amount}
                </td>
                <td className="align-middle"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
