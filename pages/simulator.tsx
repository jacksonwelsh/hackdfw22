import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";

const Simulator: NextPage = () => {
  const [savings, calcSavings] = useState(0)
  const [age, ageUp] = useState(25)

  return (
    <main className="flex-col">
      <div className="text-center">
        <h2>
          Explore various life events and experience how they may affect your retirement!
        </h2>
      </div>
      <div className="text-center">
        <h3>
          You are {age} years old.
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings - 20000)}>Buy a Car.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + 200)}>Deposit $200 into 401k.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings - 3000)}>Pay Credit Card debt.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2 onClick={() => calcSavings(savings + 2000)}>Put $2k into a HYSA.</h2>
        </Card>
      </div>
      <h3 className="text-center pt-1 cursor-pointer" onClick={() => { ageUp(age + 1); calcSavings(Math.round(savings * 1.07 * (1e2)) / 1e2); }}>&rarr; Age +1 year! &larr;</h3>
      <h3 className="text-center pt-1">Total Retirement Savings:</h3>
      <h3 className="text-center">${savings}</h3>
    </main>
  );
};

export default Simulator;
