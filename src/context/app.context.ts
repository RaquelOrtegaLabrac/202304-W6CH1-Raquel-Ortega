import { createContext } from "react";
import { usePhone } from "../hooks/use.Phone";

export type Context = {
  phoneContext: ReturnType<typeof usePhone>;
};

export const AppContext = createContext<Context>({} as Context);
