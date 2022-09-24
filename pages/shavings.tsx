import type { NextPage } from "next";
import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import companies from "../assets/companies.json";

const Shavings: NextPage = () => {
  function getRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  const numEntries: number = 22;
  const yearsToRetirement: number = 30;

  let dollars: number[] = [];
  let cardTitles: string[] = [];
  let retirementDollars: number[] = [];
  let cardSubtitle: string[] = [];

  for (let i = 0; i < numEntries; i++) {
    let cents = 0;
    cents = getRandom(0, 99);
    cents += getRandom(0, 30) * 100;

    dollars.push(cents / 100);
    console.log(companies);
    const businessIndex: number = getRandom(0, companies.companies.length - 1);
    const business: string = companies.companies[businessIndex];
    // const business = "PLACEHOLDER";
    var title: string =
      "$" + (cents / 100).toString() + ' from purchase at "' + business + '"';
    cardTitles.push(title);

    let compounded: number = calcRetirementValue(
      cents / 100,
      yearsToRetirement,
      0.06
    );

    retirementDollars.push(compounded);
    var subtitle: string =
      "That's $" + compounded.toFixed(2) + " in retirement dollars!";
    cardSubtitle.push(subtitle);
  }

  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <h1>Shavings</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 px-10">
        {cardTitles.map((numEntries, index) => (
          <Card key={uuidv4()}>
            <h2>{cardTitles[index]}</h2>
            <h3>{cardSubtitle[index]}</h3>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Shavings;
