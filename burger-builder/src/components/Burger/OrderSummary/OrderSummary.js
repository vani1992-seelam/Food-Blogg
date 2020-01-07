import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredientSummery}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Review Order</h3>
      <p> a delicious burger with the fallowing ingredients:</p>
      <ul>{ingredientSummery}</ul>
      <p>Continue to checkout</p>
    </Aux>
  );
};
export default orderSummary;
