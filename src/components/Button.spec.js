import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

describe("Guess Button", () => {
  it("guess button should render", () => {
    const { queryByText } = render(<Button label="make your guess" />);

    expect(queryByText("make your guess")).toBeTruthy();
  });

  it("guess button should trigger click event", () => {
    const handleGuess = jest.fn();
    const { getByText } = render(
      <Button label="make your guess" onClick={handleGuess} />
    );
    const button = getByText("make your guess");
    fireEvent.click(button);

    expect(handleGuess).toHaveBeenCalled();
  });
});

describe("Game Config Button", () => {
  it("game config button should render", () => {
    const { queryByText } = render(
      <Button label="change range or play again!" />
    );

    expect(queryByText("change range or play again!")).toBeTruthy();
  });

  it("game config button should trigger click event", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="change range or play again!" onClick={onClick} />
    );
    const button = getByText("change range or play again!");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
