import type { NextPage } from "next";
import { useState } from "react";
import Card from "../components/Card";
import generateCells from "../util/generateCells";

export type SimulatorCell = {
  id: string;
  name: string;
  cost: number;
}

type SimulatorProps = {
  cells: SimulatorCell[]
}

const Simulator: NextPage<SimulatorProps> = (props) => {
  const [cells, setCells] = useState(props.cells)
  const [savings, setSavings] = useState(0)
  const [retSavings, setRetSavings] = useState(0)

  const onCellClick = (newSavings: number) => {
    setSavings(newSavings)
    if (newSavings < 0) {
      setRetSavings(0);
    } else {
      setRetSavings(Math.round(newSavings * 1.07 ** (40) * (1e2)) / 1e2)
    }
    const newCells = generateCells();

    setCells(newCells)
  }

  return (
    <main className="flex-col">
      <div className="text-center">
        <h2>
          Explore various life events and experience how they may affect your retirement!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        {cells.map((cell: SimulatorCell) => {
          return (
            <Card key={cell.id} className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
              <h3 onClick={() => onCellClick(savings + cell.cost)}>{cell.name}</h3>
            </Card>
          )
        })}
      </div>
      <h3 className="text-center">Total Capital:</h3>
      <h3 className="text-center">Current Savings &rarr; {savings.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
      <h3 className="text-center">Retirement Savings &rarr; {retSavings.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
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
