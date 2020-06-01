import React, { useState, useContext, useEffect } from "react";
import PromotionService from "../Services/PromotionService";
import PromotionItem from "./PromotionItem";
import { AuthContext } from "../Context/AuthContext";

const Promotions = (props) => {
  const [promotions, setPromotions] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    PromotionService.getPromotions().then((data) => {
      setPromotions(data.promotions);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        Promotion
        <ul className={"list-group"}>
          {promotions.map((promotion) => {
            return <PromotionItem key={promotion._id} promotion={promotion} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Promotions;
