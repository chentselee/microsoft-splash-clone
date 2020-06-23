import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { act as rendererAct } from "react-test-renderer";
import Carousel, { useAutoPlaySlides } from "../Carousel";

jest.useFakeTimers();
const slides = [1, 2, 3].map((num) => ({ content: <h1>slide{num}</h1> }));

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

it("clearing up timeout when not playing", () => {
  const { result } = renderHook(() => useAutoPlaySlides(1000, 3));
  expect(result.current.timeoutRef.current).toBeTruthy();
  rendererAct(() => result.current.setIsPlaying(false));
  expect(result.current.timeoutRef.current).toBeFalsy();
});

it("clearing up timeout when page switched", () => {
  const { result } = renderHook(() => useAutoPlaySlides(1000, 3));
  const timeout = result.current.timeoutRef.current;
  rendererAct(() => result.current.jumpToIndex(2));
  expect(result.current.timeoutRef.current).not.toBe(timeout);
});

it("clearing up timeout when unmounted", () => {
  const { result, unmount } = renderHook(() => useAutoPlaySlides(1000, 3));
  expect(result.current.timeoutRef.current).toBeTruthy();
  unmount();
  expect(result.current.timeoutRef.current).toBeFalsy();
});
