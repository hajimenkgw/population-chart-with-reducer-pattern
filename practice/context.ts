import { createContext, Dispatch } from "react";
import { Action } from "./utils/reducer";

export const SeriesContext = createContext<Highcharts.SeriesOptionsType[]>([]);
export const SeriesDispatchContext = createContext<Dispatch<Action>>(() => {});
