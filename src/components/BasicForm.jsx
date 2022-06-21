import React from "react";
import useInput from "../hooks/use-input";

const inputClasses = (input) => {
  return input ? "form-control" : "form-control invalid";
};

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    inputIsInvalid: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: lastNameValue,
    inputIsInvalid: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    inputIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput("", (value) => value.trim() !== "" && value.includes("@"));

  const submitHandler = (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={inputClasses(!firstNameIsInvalid)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name cannot be blank</p>
          )}
        </div>
        <div className={inputClasses(!lastNameIsInvalid)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name cannot be blank</p>
          )}
        </div>
      </div>
      <div className={inputClasses(!emailIsInvalid)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">E-Mail cannot be blank or must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button
          disabled={firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
