import type { NextPage } from "next";
import {
  HomeIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import Segment, { Status } from "../components/timeline/Segment";
import Modal from "../components/Modal";
import Tools, { FinanceState } from "../components/timeline/Tools";
import { useEffect, useState } from "react";
import FadeInFromTop from "../components/Animations/FadeInFromTop";

type Goal = {
  title: string;
  cost: number;
  goalYear: number;
  type: "goal" | "retirement";
  icon: React.ReactNode;
  description?: string;
};

type Health = "ok" | "over" | "under";

type CalculatedGoal = Goal & {
  endAmt: number;
  steps: Record<number, [number, number]>;
};

const Timeline: NextPage = () => {
  const calculateGrowth = (
    startAmt: number,
    startYear: number,
    endYear: number,
    yoyGrowth: number,
    annualContribution: number,
    annualContributionIncrease = 0.03
  ): [number, Record<number, [number, number]>] => {
    const yearsElapsed = endYear - startYear;
    let A = annualContribution;
    let P = startAmt;

    const M: Record<number, [number, number]> = {};
    for (let i = 0; i < yearsElapsed; ++i) {
      P += A;
      P *= 1 + yoyGrowth;
      A *= 1 + annualContributionIncrease;
      M[startYear + i] = [P, A];
      console.log({ M });
    }

    return [P, M];
  };

  const [growth, setGrowth] = useState(0.06);
  const [annualInvestmentBase, setAnnualInvestmentBase] = useState(5_000);
  const [annualContributionIncrease, setAnnualContributionIncrease] =
    useState(0.03);

  const [finances, setFinances] = useState<FinanceState>({
    currInvestments: 25_000,
    currCash: 15000,
    growth,
    annualInvestmentBase,
    annualContributionIncrease,
    year: 2022,
    birthYear: 2000,
    safetyNet: 6000,
  });

  const [goals, setGoals] = useState<Goal[]>([
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
  ]);

  const [calculated, setCalculated] = useState<CalculatedGoal[]>([]);

  useEffect(() => {
    console.log("bruh");
    setCalculated([]);
    const inner: CalculatedGoal[] = [];
    for (let i = 0; i < goals.length; ++i) {
      console.log(calculated);
      console.log({ i });
      const goal = goals[i];
      const prevAmount =
        i === 0
          ? finances.currInvestments
          : inner[i - 1].endAmt -
            Math.min(inner[i - 1].endAmt, inner[i - 1].cost);
      const startYear = i === 0 ? finances.year : inner[i - 1].goalYear;

      const [endAmt, steps] = calculateGrowth(
        prevAmount,
        startYear,
        goal.goalYear,
        finances.growth,
        finances.annualInvestmentBase,
        finances.annualContributionIncrease
      );

      inner.push({ ...goal, endAmt, steps });
      setCalculated((calculated) => [
        ...calculated,
        { ...goal, endAmt, steps },
      ]);
    }
  }, [
    goals,
    growth,
    annualContributionIncrease,
    annualInvestmentBase,
    finances.annualContributionIncrease,
    finances.annualInvestmentBase,
    finances.growth,
  ]);
  console.log({ calculated });

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
    setFinances((finances) => ({
      ...finances,
      currCash: (finances.currCash -= amt),
      currInvestments: (finances.currInvestments += amt),
    }));
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
        {" "}
      </Modal>
      <main className="container mx-auto px-2 snap-y snap-mandatory">
        <FadeInFromTop>
          <h1 className="text-4xl font-bold mb-0 text-center">Your Timeline</h1>
        </FadeInFromTop>

        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 sm:ml-0">
          <Segment
            status="ok"
            title="Today"
            year={new Date().getFullYear()}
            yearUntil={calculated[0]?.goalYear}
            icon={<ArrowRightCircleIcon />}
            steps={calculated[0]?.steps}
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
            <Tools {...finances} setFinances={setFinances} />
          </Segment>
          {calculated.map(
            ({ title, goalYear, cost, type, icon, endAmt, steps }, idx) => {
              const health: Status =
                cost > endAmt ? "danger" : cost * 1.15 > endAmt ? "warn" : "ok";

              return (
                <Segment
                  status={health}
                  title={title}
                  year={goalYear}
                  yearUntil={
                    idx < calculated.length - 1
                      ? calculated[idx + 1].goalYear
                      : goalYear + 20
                  }
                  icon={icon}
                  key={idx}
                  steps={
                    idx !== calculated.length - 1
                      ? calculated[idx + 1].steps
                      : undefined
                  }
                  cost={formatter.format(cost)}
                >
                  If you keep contributing at this rate, we expect you'll have
                  about {formatter.format(endAmt)} invested when you hit this
                  milestone.
                  {health === "danger" && (
                    <p className="text-red-500 font-bold">
                      This will not fund your milestone.{" "}
                      <button
                        className="underline"
                        onClick={() =>
                          setGoals([
                            ...goals.slice(0, idx),
                            ...goals.slice(idx + 1),
                          ])
                        }
                      >
                        Skip this milestone?
                      </button>
                    </p>
                  )}
                  {health === "warn" && (
                    <p className="text-orange-500 font-bold">
                      This should fund your milestone, but we recommend
                      increasing your investments to make sure you'll meet it.
                    </p>
                  )}
                </Segment>
              );
            }
          )}
        </ol>
      </main>
    </>
  );
};

export default Timeline;
