import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GridItem from "./Grid/GridItem";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PromotionItem = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} item xs>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.promotion.etablissement.nom}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.promotion.offre}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.promotion.etablissement.adresse.rue}
          {" - "}
          {props.promotion.etablissement.adresse.ville}
        </Typography>
        <Typography variant="body2" component="p">
          {props.promotion.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PromotionItem;
