import React, { useState, useEffect } from "react";
import Nutrition from "./Nutrition";
import AddNutrition from "./AddNutrition";
import "./NutritionList.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LIST, ADD_NUTRITION, DELETE_NUTRITION } from "../utils/queries";
import { DeleteButton } from "./DeleteButton";
import { ResetButton } from "./ResetButton";

const NutritionList = () => {
  const [nutritionList, setNutritionList] = useState([]);
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_LIST, {
    pollInterval: 1
  });

  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [nameSortDir, setNameSortDir] = useState("none");
  const [caloriesSortDir, setCaloriesSortDir] = useState("none");

  useEffect(() => {
    if (data) {
      const list = data.getList?.map((e) => ({ ...e, isSelect: false }));
      setNutritionList(list);
    }
  }, [data]);

  const [selectAll, setSelectAll] = useState(false);

  const handleselectAll = () => {
    const list = nutritionList.map((e) => ({ ...e, isSelect: !selectAll }));
    setSelectAll(!selectAll);
    setNutritionList(list);
    if (!selectAll) setCount(list.length);
    if (selectAll) setCount(0);
  };

  const handleReset = (data) => {
    const list = data.map((e) => ({ ...e, isSelect: false }));
    setNutritionList(list);
  };

  const handleAdd = () => {
    setIsAddFormVisible(true);
  };

  const handleSelect = (id) => {
    const list = nutritionList.map((e) => {
      if (id === e.id) {
        return {
          ...e,
          isSelect: !e.isSelect
        };
      } else {
        return e;
      }
    });
    const selectedTotalCount = list.reduce((acc, cur) => {
      if (cur.isSelect) acc = acc+ 1;
      return acc;
    }, 0);
    if (selectedTotalCount === list.length) setSelectAll(true);
    if (selectedTotalCount !== list.length) setSelectAll(false);
    setNutritionList(list);
    setCount(selectedTotalCount);
  };

  const handleNameSort = () => {
    if (nameSortDir === "none") {
      setNameSortDir("asc");
      nutritionList.sort((a, b) => a.dessert.localeCompare(b.dessert));
    } 
    if (nameSortDir === "asc") {
      setNameSortDir("desc");
      nutritionList.sort((a, b) => b.dessert.localeCompare(a.dessert));
    }
    if (nameSortDir === "desc") {
      setNameSortDir("asc");
      nutritionList.sort((a, b) => a.dessert.localeCompare(b.dessert));
    } 
  }

  const handleCaloriesSort = () => {
    if (caloriesSortDir === "none") {
      console.log('draft0')
      setCaloriesSortDir("asc");
      nutritionList.sort((a, b) => a.nutritionInfo.calories - b.nutritionInfo.calories);
    } 
    if (caloriesSortDir === "asc") {
      console.log('draft1')
      setCaloriesSortDir("desc");
      nutritionList.sort((a, b) => b.nutritionInfo.calories - a.nutritionInfo.calories);
    }
    if (caloriesSortDir === "desc") {
      console.log('draft2')
      setCaloriesSortDir("asc");
      nutritionList.sort((a, b) => a.nutritionInfo.calories - b.nutritionInfo.calories);
    } 
  }

  return (
    <>
      {!isAddFormVisible && (
        <div className="container">
          <div className="topBar">
            <div className="title">
              <span className="list-title">Nutrition List</span>
            </div>
            <ResetButton handleReset={handleReset} />
          </div>
          <div className="tableContainer">
            <table className="table">
              <tr className="tableBar">
                <div className="selectionContainer">
                  <span className="selection">{`${count} selected`}</span>
                </div>
                <button className="addButton" onClick={handleAdd}>
                  Add
                </button>
                <DeleteButton nutritionList={nutritionList} setCount={setCount} setSelectAll={setSelectAll} />
              </tr>
              <div className="listContainer">
                <tr className="list">
                  <th className="listName">
                    <input
                      type="checkbox"
                      value="all"
                      checked={selectAll}
                      onClick={handleselectAll}
                    />
                  </th>
                  <th className="listName">
                    <button onClick={handleNameSort}>Dessert(100g serving)</button>
                    </th>
                  <th className="listName">
                    <button onClick={handleCaloriesSort}>Calories</button>
                    </th>
                  <th className="listName">Fat</th>
                  <th className="listName">Carbs</th>
                  <th className="listName">Protein(g)</th>
                </tr>
              </div>
              <div>
                {loading && <p>Loading...</p>}
                {nutritionList?.length === 0 && !loading && <p>No result</p>}
                {nutritionList.map((nutrition) => (
                  <div className="itemContainer">
                    <tr className="itemRow">
                      <Nutrition
                        key={nutrition.id}
                        nutrition={nutrition}
                        handleSelect={handleSelect}
                      />
                    </tr>
                  </div>
                ))}
              </div>
            </table>
          </div>
        </div>
      )}
      {isAddFormVisible && (
        <AddNutrition setIsAddFormVisible={setIsAddFormVisible} />
      )}
    </>
  );
};

export default NutritionList;
