import { SeriesOptionsType } from "highcharts";
import { PopulationStructure } from "../interface";
import { fetcher } from "./useResas";

export const getPopulationData = async (prefCode: number, prefName: string) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;

  const data = await fetcher<PopulationStructure>(url).then((res) => {
    const populationData = res.result.data[0].data.map((item) => item.value);
    const newData: SeriesOptionsType = {
      type: "line",
      data: populationData,
      name: prefName,
    };

    return newData;
  });

  return data;
};
