import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { GET_LIST, ADD_NUTRITION, DELETE_NUTRITION } from "../utils/queries";

export const DeleteButton = (props) => {
  const {nutritionList, setCount, setSelectAll } = props;
  let selectIds = [];

  const [deleteItem] = useMutation(DELETE_NUTRITION, {
    variables: { ids: selectIds }
  });

  const getDeleteIds = () => {
    nutritionList.forEach((e) => {
      if (e.isSelect) {
        selectIds.push(e.id);
      }
    });
  };

  return (
    <button
      onClick={() => {
        getDeleteIds();
        deleteItem();
        setCount(0);
        setSelectAll(false);
      }}
    >
      Delete
    </button>
  );
};
