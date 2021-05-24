import { useState } from "react";

export default function useMutableState() {
  const [state, setState] = useState({});
  const setMState = (obj) => {
    setState({
      ...state,
      ...obj,
    });
  };

  return [state, setMState];
}
