import { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [enteredValues, setEnteredValues] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValues);

  function handleInputChange(event) {
    setEnteredValues(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }

  return {
    value: enteredValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
};

export default useInput;
