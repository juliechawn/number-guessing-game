import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

describe("Guess Input", () => {
  it("guess input should render", () => {
    const { queryByText } = render(<Input label="YOUR GUESS" />);
    expect(queryByText("YOUR GUESS")).toBeTruthy();
  });
  it("guess input should change", () => {
    const { getByLabelText } = render(<Input label="guess" />);
    fireEvent.change(getByLabelText("guess"), { target: { value: "5" } });
    expect(getByLabelText("guess").value).toEqual("5");
  });
});

describe("Lower Bound Input", () => {
  it("lower bound input should render", () => {
    const { queryByText } = render(<Input label="lower" />);
    expect(queryByText("lower")).toBeTruthy();
  });

  it("lower bound input should change", () => {
    const { getByLabelText } = render(<Input label="lower" />);
    fireEvent.change(getByLabelText("lower"), { target: { value: "10" } });
    expect(getByLabelText("lower").value).toEqual("10");
  });
});

describe("Upper Bound Input", () => {
  it("upper bound input should render", () => {
    const { queryByText } = render(<Input label="upper" />);
    expect(queryByText("upper")).toBeTruthy();
  });
  it("upper bound input should change", () => {
    const { getByLabelText } = render(<Input label="upper" />);
    fireEvent.change(getByLabelText("upper"), { target: { value: "100" } });
    expect(getByLabelText("upper").value).toEqual("100");
  });
});
