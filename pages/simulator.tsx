import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import events from "../assets/scenarios.json";

const Simulator: NextPage = () => {
  const [savings, calcSavings] = useState(0)
  const [retSavings, calcRet] = useState(0)

  var cell1 = generateCell()
  var cell2 = generateCell()
  var cell3 = generateCell()
  var cell4 = generateCell()

  useEffect(() => {
    if (savings < 0) {
      calcRet(0)
    }
    else {
      calcRet(Math.round(savings * 1.07 ** (40) * (1e2)) / 1e2)
    }
  }, [savings])

  return (
    <main className="flex-col">
      <div className="text-center">
        <h2>
          Explore various life events and experience how they may affect your retirement!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + cell1.cost)}>{cell1.name}</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + cell2.cost)}>{cell2.name}</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings - cell3.cost)}>{cell3.name}</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + cell4.cost)}>{cell4.name}</h2>
        </Card>
      </div>
      <h3 className="text-center">Total Capital:</h3>
      <h3 className="text-center">Current Savings &rarr; ${savings}</h3>
      <h3 className="text-center">Retirement Savings &rarr; ${retSavings}</h3>
    </main>
  );

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function generateCell() {
    return events.tiles[getRandomIntInclusive(0, 14)]
  }


};

export default Simulator;
