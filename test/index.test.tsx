import React from "react";
import { InMemoryCache, gql } from "@apollo/client";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";

import Index from "../pages";

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

const cache = new InMemoryCache();
cache.writeQuery({
  query: gql`
    query Viewer {
      viewer {
        id
        name
        status
      }
    }
  `,
  data: {
    viewer: {
      __typename: "User",
      id: "Baa",
      name: "Baa",
      status: "Healthy",
    },
  },
});
let root: ReactTestRenderer;
describe("Index", () => {
  it("renders the html we want", async () => {
    act(() => {
      root = create(
        <MockedProvider cache={cache}>
          <Index />
        </MockedProvider>
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
