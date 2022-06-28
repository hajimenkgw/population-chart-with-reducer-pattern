/// Highchartsに流し込むデータの型
/// 実際に使うときはこんな感じ：{type: 'line', data: [1, 2, 3], name: 'データラベル'}

import { SeriesOptionsType } from "highcharts";

export type Series = SeriesOptionsType[] | never[];

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

/// RESAS API 「人口構成」のデータ型
/// see: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export interface PopulationStructure {
  boundaryYear: number;
  data: { label: string; data: PopulationData[] }[];
}

type PopulationData = { year: number; value: number };
