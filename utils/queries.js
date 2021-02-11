import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query getList {
    getList {
      id
      dessert
      nutritionInfo {
        calories
        fat
        carb
        protein
      }
    }
  }
`;

export const RESET_LIST = gql`
  query resetList {
    resetList {
      id
      dessert
      nutritionInfo {
        calories
        fat
        carb
        protein
      }
    }
  }
`;

export const ADD_NUTRITION = gql`
  mutation addNutrition($dessert: String, $calories: Int, $fat: Int, $carb: Int, $protein: Int) {
    addNutrition(
      dessert: $dessert
      nutritionInfo: { calories: $calories, fat: $fat, carb: $carb, protein: $protein }
    ) {
      # id
      dessert
      nutritionInfo {
        calories
      }
    }
  }
`;

export const DELETE_NUTRITION = gql`
  mutation deleteNutrition($ids: [ID]) {
    deleteNutrition(ids: $ids) {
      id
      dessert
      nutritionInfo {
        calories
      }
    }
  }
`;
