import React from "react";
import Enzyme from "enzyme";
import { MockedProvider } from "@apollo/client/testing";
import renderer from "react-test-renderer";
import NutritionList from "./NutritionList";
import { ApolloProvider } from "@apollo/react-hooks";
import { createMockClient } from "mock-apollo-client";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("NutritionList Component", () => {
  const mockClient = createMockClient();

  it("should render title", () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
      <ApolloProvider client={mockClient}>
        <NutritionList />
      </ApolloProvider>
      </MockedProvider>
    );

    const tree = component.toJSON();
    expect(tree.children).toBeDefined();
});
});