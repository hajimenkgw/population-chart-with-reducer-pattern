import { SeriesLineOptions } from "highcharts";
import { Series } from "../interface";

export type Action =
  | { type: "ADD_SERIES"; newData: SeriesLineOptions }
  | { type: "REMOVE_SERIES"; prefName: string };

export const seriesReducer = (state: Series, action: Action) => {
  switch (action.type) {
    case "ADD_SERIES": {
      return [...state, action.newData];
    }
    case "REMOVE_SERIES": {
      return state.filter((item) => item.name !== action.prefName);
    }
    default:
      throw new ExhaustiveError(action);
  }
};

class ExhaustiveError extends Error {
  constructor(value: never, message = `Unsupported type: ${value}`) {
    super(message);
  }
}
