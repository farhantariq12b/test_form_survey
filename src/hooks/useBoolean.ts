import { useState } from "react";

export const useBoolean = (initial = false) => {
  const [isOn, setIsOn] = useState(initial);

  const on = () => setIsOn(true);
  const off = () => setIsOn(false);
  const toggle = () => setIsOn((prev) => !prev);

  return {
    isOn,
    on,
    off,
    toggle,
  };
};
