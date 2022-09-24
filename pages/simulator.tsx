import type { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";

const Simulator: NextPage = () => {
  var savings = 0

  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <h2>
          Explore various life events and experience how they may affect your retirement!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10 text-center">
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2>Buy a Car.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2>Deposit $200 into 401k.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2>Pay Credit Card debt.</h2>
        </Card>
        <Card className="border-2 border-violet-700 bg-gradient-to-tr from-blue-500 to-purple-500 text-stone-900">
          <h2>Hire an Escort. (sus)</h2>
        </Card>
      </div>
      <h3 className="text-center pt-10">Total Retirement Savings: ${ savings } </h3>
    </main>
  );
};

export default Simulator;
