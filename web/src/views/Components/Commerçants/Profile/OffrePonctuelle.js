import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import Button from "../../../../components/CustomButtons/Button";
import PromotionService from "Services/PromotionService";

const OffrePermanent = (props) => {
  const [promotion, setPromotion] = useState({
    etablissement: { nom: "", adresse: { rue: "", ville: "" } },
    nom: "",
    offre: "",
    description: "",
  });

  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  const onChange = (e) => {
    let new_promotion = promotion;
    switch (e.target.name) {
      case "rueEtablissement":
        new_promotion.etablissement.adresse.rue = e.target.value;
        setPromotion({ ...new_promotion });
        break;
      case "villeEtablissement":
        new_promotion.etablissement.adresse.ville = e.target.value;
        setPromotion({ ...new_promotion });
        break;
      case "nomEtablissement":
        new_promotion.etablissement.nom = e.target.value;
        setPromotion({ ...new_promotion });
        break;
      default:
        setPromotion({ ...promotion, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    PromotionService.postPromotion(promotion).then((data) => {
      const { message } = data;
      setMessage(message);
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/");
        }, 2000);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <GridContainer>
          <GridItem>
            <input
              type={"text"}
              name={"rueEtablissement"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrez une rue"}
              value={promotion.etablissement.adresse.rue}
              required
            />
          </GridItem>
          <GridItem>
            <input
              type={"text"}
              name={"villeEtablissement"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrez un nom de ville"}
              value={promotion.etablissement.adresse.ville}
              required
            />
          </GridItem>
          <GridItem>
            <input
              type={"text"}
              name={"nomEtablissement"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrez un nom d'établissement"}
              value={promotion.etablissement.nom}
              required
            />
          </GridItem>
          <GridItem>
            <label htmlFor={"nom"} className={"sr-only"}></label>
            <input
              type={"text"}
              name={"nom"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrez un nom d'offre"}
              value={promotion.nom}
              required
            />
          </GridItem>
          <GridItem>
            <label htmlFor={"offre"} className={"sr-only"}>
              offre:{" "}
            </label>
            <input
              type={"text"}
              name={"offre"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrer une offre"}
              value={promotion.offre}
              required
            />
          </GridItem>
          <GridItem>
            <label htmlFor={"description"} className={"sr-only"}>
              description:{" "}
            </label>
            <input
              type={"text"}
              name={"description"}
              onChange={onChange}
              className={"form-control"}
              placeholder={"Entrer une description"}
              value={promotion.description}
              required
            />
          </GridItem>
          <GridItem>
            <button
              className={"btn btn-lg btn-primary btn-block"}
              type={"submit"}
            >
              Ajouter promotion
            </button>
          </GridItem>

          <GridItem xs={10} sm={10} md={4}>
            <CustomDropdown
              dropdownHeader={"Etablissement(s)"}
              buttonText={"Choix de l'établissement"}
              buttonProps={{
                color: "primary",
                round: true,
                size: "lg",
              }}
              dropdownList={[
                "Etablissement 1",
                { divider: true },
                "Etablissement 2",
                { divider: true },
                "ect",
              ]}
            />
          </GridItem>
          <GridItem xs={8} sm={8} md={3}>
            <Button size={"lg"} color={"primary"}>
              {" "}
              Poster l'offre ponctuelle{" "}
            </Button>
          </GridItem>
        </GridContainer>
      </form>

      <p> Salut, ici y'a la liste des offres publié par le commerçant</p>
    </div>
  );
};

export default withRouter(OffrePermanent);
