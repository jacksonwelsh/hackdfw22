import type { NextPage } from "next";
import { useState } from "react";
import FadeInFromTop from "../components/Animations/FadeInFromTop";
import Card from "../components/Card";
import generateCells from "../util/generateCells";

export type SimulatorCell = {
  id: string;
  name: string;
  cost: number;
};

type SimulatorProps = {
  cells: SimulatorCell[];
};

const Simulator: NextPage<SimulatorProps> = (props) => {
  const [cells, setCells] = useState(props.cells);
  const [savings, setSavings] = useState(0);
  const [retSavings, setRetSavings] = useState(0);

  const onCellClick = (newSavings: number) => {
    setSavings(newSavings);
    if (newSavings < 0) {
      setRetSavings(0);
    } else {
      setRetSavings(Math.round(newSavings * 1.07 ** 40 * 1e2) / 1e2);
    }
    const newCells = generateCells();

    setCells(newCells);
  };

  return (
    <main className="flex-col">
      <div className="text-center">
        <FadeInFromTop>
          <h1 className="text-3xl font-bold mb-0">Feeling Lucky?</h1>
        </FadeInFromTop>
        <FadeInFromTop>
          <h2 className="text-lg font-bold mt-0">Explore various life events and experience how they may affect your retirement!</h2>
        </FadeInFromTop>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        {cells.map((cell: SimulatorCell) => {
          return (
            <Card
              key={cell.id}
              className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900 text-xl flex justify-center items-center"
            >
              <p onClick={() => onCellClick(savings + cell.cost)}>
                {cell.name} (
                {cell.cost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                )
              </p>
            </Card>
          );
        })}
      </div>
      <div className="mx-10 text-center">
        <FadeInFromTop>
          <h2 className="text-lg font-bold mt-0">
            See how different choices can affect your savings
            {/* At 25, you may not have much money in savings. If you invest early,
          even a small amount of money can make a difference. In 40 years your
          assets could be worth exponentially more! */}
          </h2>
        </FadeInFromTop>
      </div>
      <div className="fixed inset-x-0 bottom-20">
        <h3 className="text-center">Total Earnings:</h3>
        <h3 className="text-center">Current Savings &rarr;</h3>
        <h3 className="text-center">
          {savings.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
        <h3 className="text-center">Retirement Savings &rarr;</h3>
        <h3 className="text-center">
          {retSavings.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      cells: generateCells(),
    }, // will be passed to the page component as props
  };
}

export default Simulator;
