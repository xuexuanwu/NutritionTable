import React, { useState } from "react";
import "./Nutrition.css";

const selectColor = "#d9d9d9";

const Nutrition = (props) => {
  const { nutrition, handleSelect } = props;
  return (
    <div
      className="nutrition"
      style={{ backgroundColor: nutrition.isSelect && selectColor }}
    >
      <td className="item">
        <input
          type="checkbox"
          id={nutrition.id}
          checked={nutrition.isSelect}
          onClick={() => handleSelect(nutrition.id)}
        />
      </td>
      <td className="item">{nutrition.dessert}</td>
      <td className="item">{nutrition.nutritionInfo.calories}</td>
      <td className="item">{nutrition.nutritionInfo.fat}</td>
      <td className="item">{nutrition.nutritionInfo.carb}</td>
      <td className="item">{nutrition.nutritionInfo.protein}</td>
    </div>
  );
};

export default Nutrition;
