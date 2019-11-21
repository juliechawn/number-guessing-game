import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Box from "./Box";

afterEach(cleanup);

describe("Counter Box", () => {
  it("counter box should render", () => {
    const { queryByText } = render(<Box label="# of guesses" />);

    expect(queryByText("# of guesses")).toBeTruthy();
  });
});

describe("Last Guess Box", () => {
  it("last guess box should render", () => {
    const { queryByText } = render(<Box label="last guess" />);

    expect(queryByText("last guess")).toBeTruthy();
  });
});
