import type { NextPage } from "next";
import {
  HomeIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import Segment from "../components/timeline/Segment";
import Modal from "../components/Modal";
import { useState } from "react";

type FinanceState = {
  currInvestments: number;
  currCash: number;
  growth: number;
  year: number;
  birthYear: number;
  safetyNet: number;
};

type Goal = {
  title: string;
  cost: number;
  goalYear: number;
  type: "goal" | "retirement";
  icon: React.ReactNode;
  description?: string;
};

type Health = "ok" | "over" | "under";

type CalculatedGoal = Goal & { endAmt: number };

const finances: FinanceState = {
  currInvestments: 25_000,
  currCash: 15000,
  growth: 0.06,
  year: 2022,
  birthYear: 2000,
  safetyNet: 6000,
};

const goals: Goal[] = [
  {
    title: "Home Purchase",
    cost: 100_000,
    goalYear: 2030,
    type: "goal",
    icon: <HomeIcon />,
  },
  {
    title: "EuroTrip 2035",
    cost: 5_000,
    goalYear: 2035,
    type: "goal",
    icon: <PaperAirplaneIcon />,
  },
  {
    title: "Home Upgrade",
    cost: 200_000,
    goalYear: 2045,
    type: "goal",
    icon: <HomeIcon />,
  },
  {
    title: "Full Retirement",
    cost: 4_000_000,
    goalYear: 2067,
    type: "retirement",
    icon: <BanknotesIcon />,
  },
];

const Timeline: NextPage = () => {
  const calculateGrowth = (
    startAmt: number,
    startYear: number,
    endYear: number,
    yoyGrowth: number,
    annualContribution: number,
    annualContributionIncrease = 0.03
  ) => {
    const yearsElapsed = endYear - startYear;
    let A = annualContribution;
    let P = startAmt;

    for (let i = 0; i < yearsElapsed; ++i) {
      P += A;
      P *= 1 + yoyGrowth;
      A *= 1 + annualContributionIncrease;
    }

    return P;
  };

  const calculated: CalculatedGoal[] = [];
  for (let i = 0; i < goals.length; ++i) {
    const goal = goals[i];
    const prevAmount =
      i === 0
        ? finances.currInvestments
        : calculated[i - 1].endAmt - calculated[i - 1].cost;
    const startYear = i === 0 ? finances.year : calculated[i - 1].goalYear;

    const endAmt = calculateGrowth(
      prevAmount,
      startYear,
      goal.goalYear,
      finances.growth,
      5_000
    );

    calculated.push({ ...goal, endAmt });
  }

  console.table(calculated);

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const health: Health =
    finances.currCash > finances.safetyNet &&
    finances.currCash < finances.safetyNet * 1.75
      ? "ok"
      : finances.currCash > finances.safetyNet * 1.75
      ? "over"
      : "under";

  const [modalOpen, setModalOpen] = useState(false);

  const confirmInvestment = () => {
    const amt = finances.currCash - finances.safetyNet * 1.5;
    finances.currCash -= amt;
    finances.currInvestments += amt;
    setModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Timeline</title>
      </Head>
      <Modal
        title={`Invest ${formatter.format(
          finances.currCash - finances.safetyNet * 1.5
        )}?`}
        open={modalOpen}
        setOpen={setModalOpen}
        onConfirm={confirmInvestment}
      >
        it'll go to poor people and/or crackheads
      </Modal>
      <main className="container mx-auto px-2 snap-y snap-mandatory">
        <h1>Your Timeline</h1>

        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 sm:ml-0">
          <Segment
            status="ok"
            title="Today"
            year={new Date().getFullYear()}
            icon={<ArrowRightCircleIcon />}
          >
            <p>
              You have{" "}
              <span className="bg-gradient-to-tr from-teal-500 via-green-600 to-cyan-500 font-bold text-transparent bg-clip-text">
                {formatter.format(finances.currInvestments)}{" "}
              </span>
              in your retirement accounts today.
            </p>
            <p>
              You also have{" "}
              <span
                className={
                  "bg-gradient-to-tr font-bold text-transparent bg-clip-text " +
                  (health === "ok"
                    ? "from-teal-500 via-green-600 to-cyan-500"
                    : health === "over"
                    ? "from-yellow-500 to-orange-500"
                    : "from-red-500 to-pink-500")
                }
              >
                {formatter.format(finances.currCash)}{" "}
              </span>
              in cash available.
            </p>
            <p className="mt-2">
              {health === "ok" && "Nice! You've met your safety net goal."}
              {health === "over" && (
                <>
                  That's a lot of cash! You've already met your safety net;{" "}
                  <button
                    className="underline"
                    onClick={() => setModalOpen(true)}
                  >
                    invest{" "}
                    {formatter.format(
                      finances.currCash - finances.safetyNet * 1.5
                    )}
                    ?
                  </button>
                </>
              )}
              {health === "under" &&
                "Looks like you still have some work to go to get your safety net built."}
            </p>
          </Segment>
          {calculated.map(
            ({ title, goalYear, cost, type, icon, endAmt }, idx) => (
              <Segment
                status={
                  cost > endAmt
                    ? "danger"
                    : cost * 1.15 > endAmt
                    ? "warn"
                    : "ok"
                }
                title={title}
                year={goalYear}
                icon={icon}
                key={idx}
              >
                my awesome segment
              </Segment>
            )
          )}
        </ol>
      </main>
    </>
  );
};

export default Timeline;
