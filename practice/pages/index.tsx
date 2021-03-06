import type { NextPage } from "next";
import Head from "next/head";
import { Prefectures } from "../components/Prefecture";
import { Chart } from "../components/Chart";

import styles from "../styles/Home.module.css";
import { SeriesProvider } from "../context/provider";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>人口グラフ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SeriesProvider>
        <main className={styles.main}>
          <Prefectures />
          <Chart />
        </main>
      </SeriesProvider>
    </div>
  );
};

export default Home;
