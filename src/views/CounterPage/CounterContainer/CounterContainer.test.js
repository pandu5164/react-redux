import React from "react";
import CounterContainer from "./CounterContainer";
import { render, screen } from "../../../test-utils";

describe("should render counter heading", () => {
  test("show count text", () => {
    render(<CounterContainer />);
    expect(screen.getByText("Count")).toBeInTheDocument();
  });
});
