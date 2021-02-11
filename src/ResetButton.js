import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { RESET_LIST } from "../utils/queries";

export const ResetButton = (props) => {
  const { id, handleReset } = props;
  const [resetList, { loading, data }] = useLazyQuery(RESET_LIST, {
    onCompleted: (data) => handleReset(data.resetList)
  });
  // if (!loading && data?.resetList) {
  //   console.log("calling");
  //   handleReset(data.resetList);
  // }

  return <button onClick={resetList}>RESET DATA</button>;
};
