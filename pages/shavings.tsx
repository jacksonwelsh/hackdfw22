import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Example from "../components/shaveSettings";
import companies from "../assets/companies.json";

interface ShavingsProps {
  cards: {
    id: string;
    timeStamp: String;
    title: string;
    subtitle: string;
  }[];
}

const Shavings: NextPage<ShavingsProps> = ({ cards }) => {
  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <h1>Shavings</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 px-10">
        {cards.map(({ id, timeStamp, title, subtitle }) => (
          <Card key={id}>
            <h6>{timeStamp}</h6>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </Card>
        ))}
        <Example />
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  function getRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getPastDateThisMonth() {
    const currDate = new Date();

    const randDay = getRandom(0, currDate.getDate());

    var randHr: number, randMin: number;

    if (randDay === currDate.getDate()) {
      randHr = getRandom(0, currDate.getHours());

      if (randHr === currDate.getHours()) {
        randMin = getRandom(0, currDate.getMinutes());
      } else {
        randMin = getRandom(0, 59);
      }
    } else {
      randHr = getRandom(0, 23);
      randMin = getRandom(0, 59);
    }
    const randDate = new Date(
      currDate.getFullYear(),
      currDate.getMonth(),
      randDay,
      randHr,
      randMin
    );
    return randDate;
    console.log(randDate);
  }

  function calcRetirementValue(
    principal: number,
    yearsUntilRetire: number,
    interestRate: number = 0.07
  ): number {
    const years = yearsUntilRetire;
    const rate = interestRate;
    const value = principal * (Math.pow(1 + rate, years) - 1);
    return value;
  }

  const numEntries: number = 12;
  const yearsToRetirement: number = 30;

  let dollars: number[] = [];
  let cardTitles: string[] = [];
  let retirementDollars: number[] = [];
  let cardSubtitle: string[] = [];
  const cards = [];

  const numCompanies = companies.companies.length;
  for (let i = 0; i < numEntries; i++) {
    let cents = 0;
    cents = getRandom(0, 99);
    cents += getRandom(0, 30) * 100;
    const randDate = getPastDateThisMonth();

    dollars.push(cents / 100);
    const businessIndex: number = getRandom(0, numCompanies - 1);
    const business: string = companies.companies[businessIndex];
    const title: string =
      "$" + (cents / 100).toString() + ' from purchase at "' + business + '"';

    const compounded: number = calcRetirementValue(
      cents / 100,
      yearsToRetirement,
      0.06
    );

    const subtitle: string =
      "That's $" + compounded.toFixed(2) + " in retirement dollars!";

    cards.push({
      id: uuidv4(),
      timeStamp: randDate.toString(),
      title,
      subtitle,
    });
  }

  return {
    props: {
      cards,
    }, // will be passed to the page component as props
  };
}

export default Shavings;
