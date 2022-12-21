import React from "react";
import { NavLink } from "react-router-dom";
import './_shoescard.scss'

const ShoesCard = (props) => {
  const { prod } = props;

  return (
    <div className="container">
      <div className="card mb-3">
        <img src={prod?.image} alt="" />
        <div className="card-body">
          <h3>
            {prod?.name.length > 25
              ? prod.name.substring(0, 20) + "..."
              : prod.name}
          </h3>
          <p className="mb-5">{prod?.shortDescription}</p>
          <NavLink to={`/detail/${prod?.id}`} className="btn btn-success to_detail">
            View Detail
          </NavLink>
          <span className="btn btn-light price">$ {prod?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
