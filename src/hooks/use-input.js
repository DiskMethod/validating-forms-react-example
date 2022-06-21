import { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, enteredValue: action.enteredValue };
    case "BLUR":
      return { ...state, isTouched: action.isTouched };
    case "RESET":
      return { enteredValue: action.enteredValue, isTouched: action.isTouched };
    default:
      console.log("Should never reach here!");
  }
};

const useInput = (initialValue, validationFn) => {
  const [state, dispatch] = useReducer(inputReducer, {
    enteredValue: initialValue,
    isTouched: false,
  });

  const enteredValueIsValid = validationFn(state.enteredValue);
  const inputIsInvalid = !enteredValueIsValid && state.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({
      type: "SET",
      enteredValue: e.target.value,
    });
  };

  const inputBlurHandler = (e) => {
    dispatch({
      type: "BLUR",
      isTouched: true,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      enteredValue: initialValue,
      isTouched: false,
    });
  };

  return {
    value: state.enteredValue,
    inputIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
