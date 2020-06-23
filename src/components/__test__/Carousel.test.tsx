import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "../Carousel";

jest.useFakeTimers();
const slides = [
  {
    content: <h1>slide1</h1>,
  },
  {
    content: <h1>slide2</h1>,
  },
  {
    content: <h1>slide3</h1>,
  },
];

it("switching slides every 5 second", () => {
  const { getByRole } = render(<Carousel slides={slides} />);
  expect(getByRole("heading")).toHaveTextContent("slide1");
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(getByRole("heading")).toHaveTextContent("slide2");
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(getByRole("heading")).toHaveTextContent("slide3");
});

it("stop switching when paused", () => {
  const { getByRole, getByTestId } = render(<Carousel slides={slides} />);
  expect(getByRole("heading")).toHaveTextContent("slide1");
  fireEvent.click(getByTestId("carousel-toggle"));
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(getByRole("heading")).toHaveTextContent("slide1");
});

it("switching to previous slide when clicked", () => {
  const { getByRole, getByTestId } = render(<Carousel slides={slides} />);
  expect(getByRole("heading")).toHaveTextContent("slide1");
  fireEvent.click(getByTestId("carousel-previous"));
  expect(getByRole("heading")).toHaveTextContent("slide3");
  fireEvent.click(getByTestId("carousel-previous"));
  expect(getByRole("heading")).toHaveTextContent("slide2");
});

it("switching to next slide when clicked", () => {
  const { getByRole, getByTestId } = render(<Carousel slides={slides} />);
  expect(getByRole("heading")).toHaveTextContent("slide1");
  fireEvent.click(getByTestId("carousel-next"));
  expect(getByRole("heading")).toHaveTextContent("slide2");
  fireEvent.click(getByTestId("carousel-next"));
  expect(getByRole("heading")).toHaveTextContent("slide3");
});
