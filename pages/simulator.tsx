import type { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";

const Simulator: NextPage = () => {
  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <h2>
          Explore various life events and experience how they may affect your retirement!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4 px-10">
        <Card>
          <h2>Buy a Car.</h2>
        </Card>
        <Card>
          <h2>Deposit into 401k.</h2>
        </Card>
        <Card>
          <h2>Pay Credit Card debt.</h2>
        </Card>
        <Card>
          <h2>Hire an Escort. (sus)</h2>
        </Card>
      </div>
    </main>
  );
};

export default Simulator;
