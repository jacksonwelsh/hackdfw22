import type { NextPage } from "next";
import {
  HomeIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import Segment from "../components/timeline/Segment";

type FinanceState = {
  start: number;
  growth: number;
  year: number;
  birthYear: number;
};

type Goal = {
  title: string;
  cost: number;
  goalYear: number;
  type: "goal" | "retirement";
  icon: React.ReactNode;
  description?: string;
};

const finances: FinanceState = {
  start: 25_000,
  growth: 0.06,
  year: 2022,
  birthYear: 2000,
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
  return (
    <>
      <Head>
        <title>Timeline</title>
      </Head>
      <main className="container mx-auto px-2 snap-y snap-mandatory">
        <h1>Your Timeline</h1>

        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 sm:ml-0">
          {goals.map(({ title, goalYear, cost, type, icon }, idx) => (
            <Segment
              status="ok"
              title={title}
              year={goalYear}
              icon={icon}
              key={idx}
            >
              my awesome segment
            </Segment>
          ))}
        </ol>
        <Link href={"/"}>
          <a className="text-8xl" href="/">
            &larr;
          </a>
        </Link>
      </main>
    </>
  );
};

export default Timeline;
