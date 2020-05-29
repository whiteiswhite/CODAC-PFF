const express = require("express");
const Promotion = require("../models/Promotions");

const promotionRouter = express.Router();

promotionRouter.post("", (req, res) => {
  const newPromotion = new Promotion(req.body);
  newPromotion.save((err) => {
    if (err)
      res.status(400).json({
        message: {
          msgBody: "Bad Request",
          msgError: true,
        },
      });
    else {
      res.status(201).json({
        message: {
          msgBody: "Promotion créée avec succès",
          msgError: false,
        },
      });
    }
  });
});

promotionRouter.get("", (req, res) => {
  Promotion.find({}, (err, promotions) => {
    if (err)
      res.status(404).json({
        message: {
          msgBody: "Bad Request",
          msgError: true,
        },
      });
    else {
      res.status(200).json({
        promotions,
      });
    }
  });
});

promotionRouter.get("/:id?", (req, res) => {
  var id = req.params.id;
  Promotion.findById(id, (err, promotion) => {
    if (err)
      res.status(404).json({
        message: {
          msgBody: "Bad Request",
          msgError: true,
        },
      });
    else {
      res.status(200).json({
        promotion,
      });
    }
  });
});

promotionRouter.put("/:id?", (req, res) => {
  var id = req.params.id;
  Promotion.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    (err, promotion) => {
      if (err)
        res.status(404).json({
          message: {
            msgBody: "Bad Request",
            msgError: true,
          },
        });
      else {
        res.status(200).json({
          promotion,
        });
      }
    }
  );
});

module.exports = promotionRouter;
