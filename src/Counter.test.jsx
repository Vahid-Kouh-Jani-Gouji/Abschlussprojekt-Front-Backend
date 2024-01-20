import { expect } from "chai";
import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
expect(2).to.equal(2);
describe("Counter", () => {
  it("should count", () => {
    render(<Counter />);
    const countButton = screen.getByText("count is: 0");
    countButton.click();
    screen.getByText("count is: 1");
  });
});
describe("Rudrambika's test", () => {
  it("should say 2", () => {
    expect(2).to.equal(2);
  });
});

