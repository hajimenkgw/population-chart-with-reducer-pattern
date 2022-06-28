import { createContext, Dispatch, useContext } from "react";
import { Action } from "../utils/reducer";

export const SeriesContext = createContext<Highcharts.SeriesOptionsType[]>([]);
export const SeriesDispatchContext = createContext<Dispatch<Action>>(() => {});

export function useSeries() {
  return useContext(SeriesContext);
}

export function useSeriesDispatch() {
  return useContext(SeriesDispatchContext);
}
