import {
  getRectangleArea,
  getRectanglePerimeter,
  getRectangleInfo,
} from "../js/rectangle";

test("should get correct perimeter", () => {
  const rectanglePerimeter = getRectanglePerimeter(10, 15);
  expect(rectanglePerimeter).toBe(50);
});

test("should get correct rectangle area", () => {
  const rectangleArea = getRectangleArea(15, 15);
  expect(rectangleArea).toBe(225);
});

test("should generate a valid text output", () => {
  const output = getRectangleInfo(5, 10);
  expect(output).toBe(
    console.log("The perimeter of a rectangle is 30 and the area is 50")
  );
});
