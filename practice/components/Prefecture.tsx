import { FC, useState, useCallback, useEffect } from "react";
import { useSeriesDispatch } from "../context";
import { Prefecture } from "../interface";
import { getPopulationData } from "../utils/getPopulationData";
import { useResas } from "../utils/useResas";

import styles from "../styles/Home.module.css";

const CheckBox: FC<{ prefName: string; prefCode: number }> = ({
  prefName,
  prefCode,
}) => {
  const dispatch = useSeriesDispatch();
  const [isOn, setIsOn] = useState(false);

  const toggle = useCallback(() => {
    setIsOn((state) => !state);
  }, []);

  const hanleChange = async () => {
    if (isOn) {
      dispatch({ type: "REMOVE_SERIES", prefName: prefName });
    } else {
      dispatch({
        type: "ADD_SERIES",
        newData: await getPopulationData(prefCode, prefName),
      });
    }

    toggle();
  };

  return (
    <label htmlFor={prefName} key={prefName}>
      <input
        type="checkbox"
        id={prefName}
        onChange={hanleChange}
        checked={isOn}
      />
      {prefName}
    </label>
  );
};

export const Prefectures = () => {
  const { result, error } = useResas<Prefecture[]>("api/v1/prefectures");

  useEffect(() => {
    getPopulationData(1, "hoge");
  });

  if (error) return <>Something went wrong...</>;
  if (!result) return <>Loading ...</>;

  return (
    <div className={styles.grid}>
      {result.map(({ prefCode, prefName }) => (
        <CheckBox prefCode={prefCode} prefName={prefName} key={prefCode} />
      ))}
    </div>
  );
};
