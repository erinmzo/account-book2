import { useState } from "react";

const useInputChange = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);
  const handler = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const reset = () => {
    setValues(defaultValues);
  };
  return { values, handler, reset };
};
export default useInputChange;
