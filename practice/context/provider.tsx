import { FC, ReactNode, useReducer } from "react";
import { SeriesContext, SeriesDispatchContext } from ".";
import { seriesReducer } from "../utils/reducer";

export const SeriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(seriesReducer, []);

  return (
    <SeriesContext.Provider value={tasks}>
      <SeriesDispatchContext.Provider value={dispatch}>
        {children}
      </SeriesDispatchContext.Provider>
    </SeriesContext.Provider>
  );
};
