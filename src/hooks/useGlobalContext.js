import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const useGlobalContext = () => {
  const contact = useContext(GlobalContext);

  return contact;
};
