import { string } from "yup";

const spacesRegExp = new RegExp("(.*\\s+.*)");

export const email = string().email().required().label("E-mail");

export const password = string()
  // uppercase
  .matches(
    /(.*?[A-Z]){2,}/,
    "The string must contain at least 2 uppercase alphabetical character",
  )
  // number
  .matches(/.*[0-9].*/, "The string must contain at least 1 numeric character")
  // special
  .matches(
    /(.*[@$!%*#?&].*)/,
    "The string must contain at least one special character",
  )
  // spaces
  .test("spaces", "The string must not contain spaces", value => {
    if (!value) {
      return true;
    }
    return !spacesRegExp.test(value);
  })
  .min(8)
  .required()
  .label("Password");
