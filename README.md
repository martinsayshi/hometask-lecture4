# hometask-lecture4

```text
This repository holds hometask from lecture 4.
```

#### Step 1: Clone the repository or create your own locally

Check the project structure and the set up:

- README.md file
- package.json file with dependencies (explained in step 2)
- js folder with files
- tests folder with file
- babel.config.js file (explained in step 3)
- .gitignore file

#### Step 2: Initialize command 'yarn init'

Open the terminal and input the command 'yarn init'. Next, answer all of the questions (see below). Then, make sure a file 'package.json' was created in the root directory.

```json
{
  "name": "hometask-project-set-up",
  "version": "1.0.0",
  "description": "This is my first project",
  "main": "index.js",
  "repository": "https://github.com/martinsayshi/hometask-lecture4.git",
  "author": "Marcin Miekisz <miekiszmarcin@gmail.com>",
  "license": "MIT",
  "private": false
}
```

#### Step 3: Install babel

Before running test, to allow importing functions, babel needs to be installed. Please follow the exact instructions from the official jest website: https://jestjs.io/docs/getting-started#using-typescript

#### Step 4: Check "package.json" file.

Make sure the file contains the code below:

```json
"scripts": {
    "test": "jest"
}
```

#### Step 5: Run the command 'yarn test'

Expected: Failed, because there are no tests so far.

#### Step 6: Create tests

- Inside the folder "tests", create a 'rectangle.test.js' file
- Import all necessary functions and write the first unit test

```javascript
import {
  getRectangleArea,
  getRectanglePerimeter,
  getRectangleInfo,
} from "../js/rectangle";

test("should get correct perimeter", () => {
  const rectanglePerimeter = getRectanglePerimeter(10, 15);
  expect(rectanglePerimeter).toBe(50);
});
```

Run 'yarn test' to check the result.

Add the second unit test

```javascript
test("should get correct rectangle area", () => {
  const rectangleArea = getRectangleArea(15, 15);
  expect(rectangleArea).toBe(225);
});
```

Add the first integration tests

```javascript
test("should generate a valid text output", () => {
  const output = getRectangleInfo(5, 10);
  expect(output).toBe(
    console.log("The perimeter of a rectangle is 30 and the area is 50")
  );
});
```

#### Step 7. Commit and push changes to the testing branch and make a pull request to the main branch
