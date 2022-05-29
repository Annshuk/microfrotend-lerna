import React from "react";
import { screen, render } from "@testing-library/react";

import { Button } from "../";

const props = { label: "Button" };

describe("Test Component", () => {
  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    props.primary = true;

    renderComponent();

    expect(screen.getByTestId("button")).toHaveClass(
      "storybook-button--primary"
    );
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    props.primary = false;

    renderComponent();

    expect(screen.getByTestId("button")).toHaveClass(
      "storybook-button--secondary"
    );
  });
});
