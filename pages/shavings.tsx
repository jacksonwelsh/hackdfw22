import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Example from "../components/shaveSettings";
import companies from "../assets/companies.json";
import FadeInFromTop from "../components/Animations/FadeInFromTop";

interface ShavingsProps {
  cards: {
    id: string;
    timeStamp: string;
    title: string;
    subtitle: string;
  }[];
  shavings: number;
  retirement: number;
}

const yearsToRetirement = 30;

const Shavings: NextPage<ShavingsProps> = ({ cards, shavings, retirement }) => {
  function compareDateString(a: string, b: string) {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  }

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  cards.sort((a, b) => compareDateString(a.timeStamp, b.timeStamp));

  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <FadeInFromTop>
          <h1 className="text-3xl font-bold">Shavings</h1>
        </FadeInFromTop>
        <FadeInFromTop>
          <h2 className="text-lg font-bold mt-0">
            {yearsToRetirement} years until retirement
          </h2>
        </FadeInFromTop>
        <FadeInFromTop>
          <h6 className="text-md mt-0">
            Each time a shaving is made, this number goes down
          </h6>
        </FadeInFromTop>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 px-10">
        <Card key={uuidv4()}>
          <div className="grid grid-col-1 gap-4 my-4 px-12 break-words sm:grid-col-2 ">
            <h2>total shavings: ${shavings.toFixed(2)}</h2>
            <h2>retirement dollars: ${retirement.toFixed(2)}</h2>
          </div>
        </Card>
        {cards.map(({ id, timeStamp, title, subtitle }) => {
          let thisDate = new Date(timeStamp);
          let timeOfDay = "AM";
          if (thisDate.getHours() >= 12) {
            timeOfDay = "PM";
          }
          let hours = thisDate.getHours();
          if (hours > 12) {
            hours = hours - 12;
          }
          return (
            <Card key={id}>
              <h6>
                {thisDate.toLocaleDateString()} - {hours}:
                {zeroPad(thisDate.getMinutes(), 2)} {timeOfDay}
              </h6>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </Card>
          );
        })}
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

  const numEntries: number = 11;
  const cards = [];

  const numCompanies = companies.companies.length;
  let totalShavings = 0;
  let totalRetirementValue = 0;

  for (let i = 0; i < numEntries; i++) {
    let cents = 0;
    cents = getRandom(0, 99);
    cents += getRandom(0, 30) * 100;
    const randDate = getPastDateThisMonth();

    const businessIndex: number = getRandom(0, numCompanies - 1);
    const business: string = companies.companies[businessIndex];
    const title: string =
      "$" + (cents / 100).toString() + ' from purchase at "' + business + '"';

    const compounded: number = calcRetirementValue(
      cents / 100,
      yearsToRetirement,
      0.06
    );
    totalShavings += cents / 100;
    totalRetirementValue += compounded;

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
      shavings: totalShavings,
      retirement: totalRetirementValue,
    }, // will be passed to the page component as props
  };
}

export default Shavings;
