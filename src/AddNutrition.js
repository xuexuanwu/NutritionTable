import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LIST, ADD_NUTRITION, DELETE_NUTRITION } from "../utils/queries";
import "./AddNutrition.css";

const AddNutrition = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [fatInput, setFatInput] = useState("");
  const [carbsInput, setCarbsInput] = useState("");
  const [proteinInput, setProteinInput] = useState("");

  const { setIsAddFormVisible } = props;

  const [addItem] = useMutation(ADD_NUTRITION, {
    variables: {
      dessert: nameInput,
      calories: parseInt(caloriesInput, 10),
      fat: parseInt(fatInput, 10),
      carb: parseInt(carbsInput, 10),
      protein: parseInt(proteinInput, 10)
    }
  }, {
    onCompleted(data) {
    }
  });
  // TODO: FORM VALIDATION
  return (
    // <div className={isVisible? "card": "cardHidden"}>
    // <div className="cardHidden">
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsAddFormVisible(false);
          addItem();
        }}
      >
        <label className="label">Dessert Name* </label>
        <input
          type="text"
          value={nameInput}
          defaultValue={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        ></input>

        <br />

        <label className="label">Calories*</label>
        <input
          type="text"
          value={caloriesInput}
          onChange={(e) => setCaloriesInput(e.target.value)}
        ></input>

        <label className="label">Fat* </label>
        <input
          type="text"
          value={fatInput}
          onChange={(e) => setFatInput(e.target.value)}
        ></input>

        <label className="label">Carbs* </label>
        <input
          type="text"
          value={carbsInput}
          onChange={(e) => setCarbsInput(e.target.value)}
        ></input>

        <label className="label">Protein* </label>
        <input
          type="text"
          value={proteinInput}
          onChange={(e) => setProteinInput(e.target.value)}
        ></input>
        {/* <div className="button"> */}
        <input type="submit" value="Submit" className="submit" />
        {/* </div> */}
      </form>
    </div>
  );
};

export default AddNutrition;
