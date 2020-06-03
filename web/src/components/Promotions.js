import React, { useState, useContext, useEffect } from "react";
import PromotionService from "../Services/PromotionService";
import PromotionItem from "./PromotionItem";
import { AuthContext } from "../Context/AuthContext";
import GridContainer from "../components/Grid/GridContainer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

const Promotions = (props) => {
  const [promotions, setPromotions] = useState([]);
  const [message, setMessage] = useState(null);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  useEffect(() => {
    PromotionService.getPromotions().then((data) => {
      setPromotions(data.promotions);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container justify="center" spacing={5} item xs margin-top={5}>
      {promotions.map((promotion) => {
        return <PromotionItem key={promotion._id} promotion={promotion} />;
      })}
    </Grid>
  );
};

export default Promotions;
