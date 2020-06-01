import React from "react";

const PromotionItem = (props) => {
  return (
    <li>
      {props.promotion.nom}
      {props.promotion.offre}
    </li>
  );
};

export default PromotionItem;
