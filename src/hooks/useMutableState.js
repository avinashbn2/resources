import { useState } from "react";

export default function useMutableState() {
  const [state, setState] = useState({});
  const setMState = (obj) => ({
    ...state,
    ...obj,
  });

  return [state, setMState];
}
