import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

interface SimulatorProps {
  scenarioIndices: number[];
}

const Simulator: NextPage<SimulatorProps> = ({ scenarioIndices }) => {
  const [savings, calcSavings] = useState(0);
  const [retSavings, calcRet] = useState(0);
  var randIndex = 0;

  // scenario[scenarioIndices[randIndex]];
  // ++randIndex;

  console.log(scenarioIndices);
  useEffect(() => {
    if (savings < 0) {
      calcRet(0);
    } else {
      calcRet(Math.round(savings * 1.07 ** 40 * 1e2) / 1e2);
    }
  }, [savings]);

  return (
    <main className="flex-col">
      <div className="text-center">
        <h2>
          Explore various life events and experience how they may affect your
          retirement!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings - 20000)}>Buy a Car.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + 200)}>
            Deposit $200 into 401k.
          </h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings - 5000)}>
            Pay Credit Card debt.
          </h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + 2000)}>
            Put $2k into a HYSA.
          </h2>
        </Card>
      </div>
      <h3 className="text-center">Total Capital:</h3>
      <h3 className="text-center">Current Savings &rarr; ${savings}</h3>
      <h3 className="text-center">Retirement Savings &rarr; ${retSavings}</h3>
    </main>
  );
};

export async function getServerSideProps() {
  const arrSize: number = 250;
  const maxIndex: number = 15 - 1;

  function getRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randArr: number[] = [];
  for (var i = 0; i < arrSize; i++) {
    const num = getRandom(0, maxIndex);
    randArr.push(num);
  }
  return {
    props: {
      scenarioIndices: randArr,
    },
  };
}

export default Simulator;
