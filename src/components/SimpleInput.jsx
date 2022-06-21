import React from "react";

import useInput from "../hooks/use-input";

const inputIsValid = (input) => {
  return input ? "form-control" : "form-control invalid";
};

const SimpleInput = (props) => {
  const {
    value: enteredName,
    inputIsInvalid: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: enteredEmail,
    inputIsInvalid: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput("", (value) => value.includes("@") && value.trim() !== "");

  // overall form validation
  let formIsValid = false;

  if (!nameInputIsInvalid && !emailInputIsInvalid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputIsValid(!nameInputIsInvalid)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={inputIsValid(!emailInputIsInvalid)}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            Email must not be empty or must contain @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
