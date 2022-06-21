import { useState } from "react";

const useInput = (initialValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validationFn(enteredValue);
  const inputIsInvalid = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    inputIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
