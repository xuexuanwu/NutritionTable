import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import NutritionList from "./NutritionList";
import { APOLLO_URL } from "../utils/constants";

const client = new ApolloClient({
  uri: APOLLO_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <NutritionList />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
