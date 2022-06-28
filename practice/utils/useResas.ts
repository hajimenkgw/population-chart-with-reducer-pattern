import useSWR from "swr";

interface Res<T> {
  result: T;
}

const API_KEY = "B54onZ294qfIEvmevUdQX9lOiKJrDnoNR7LYDrQ6";
export const fetcher = <T>(url: string): Promise<Res<T>> =>
fetch(url, {
  headers: {
    "X-API-KEY": API_KEY,
  },
}).then((res) => res.json());

export const useResas = <T>(path: string) => {
  const resasFetcher = fetcher<T>

  const { data, error } = useSWR(
    `https://opendata.resas-portal.go.jp/${path}`,
    resasFetcher
  );

  const result = data?.result;

  return { result, error };
};
