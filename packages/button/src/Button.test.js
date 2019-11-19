import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button", function() {
  test("should call onClick when clicking on the button", function() {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button" onClick={onClickMock} />,
    );
    fireEvent.click(getByTestId("button"));

    expect(onClickMock).toBeCalled();
  });

  test("should render the loading icon the loading prop is true", function() {
    const { getByTestId } = render(<Button loading />);

    expect(getByTestId("loading")).toBeInTheDocument();
  });
});
