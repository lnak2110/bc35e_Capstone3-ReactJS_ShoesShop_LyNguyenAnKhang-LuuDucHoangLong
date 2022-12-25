import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateTotalsAction,
  changeProductQuantityAction,
  deleteProductAction,
} from '../../redux/reducer/cartReducer';

const Cart = () => {
  const { cartProducts, cartAmount, cartTotalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalsAction());
  }, [cartProducts]);

  const changeProductQuantity = (id, num) => {
    dispatch(changeProductQuantityAction({ id, num }));
  };

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
                  <button
                    className="btn-quantity"
                    onClick={() => changeProductQuantity(product.id, 1)}
                  >
                    +
                  </button>
                  <span className="quantity py-1 mx-3">{product.amount}</span>
                  <button
                    className="btn-quantity"
                    onClick={() => changeProductQuantity(product.id, -1)}
                  >
                    -
                  </button>
                </td>
                <td className="align-middle">
                  $ {product.price * product.amount}
                </td>
                <td className="align-middle">
                  <button
                    className="btn-delete"
                    onClick={() => dispatch(deleteProductAction(product.id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
            <tr className="table-info">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{cartAmount}</td>
              <td>$ {cartTotalPrice}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
