import { useState } from "react";

export const useAuthForm = () => {
  const [authFormValue, setAuthFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setAuthFormValue({
      ...authFormValue,
      [event.target.id]: event.target.value,
    });
  };

  return { authFormValue, handleChange };
};
