import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInFromTop from "../components/Animations/FadeInFromTop";
import PositionCard, { PositionCardProps } from "../components/PositionCard";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { labels } from "../components/PositionCard/LineChart";

const positions: PositionCardProps[] = [
  {
    id: uuidv4(),
    symbol: "$TSLA",
    company: "Tesla Inc, NASDAQ",
    trend: "up",
    percentage: 3.44,
    timeframe: "Daily",
    price: 293.51,
    data: labels.map(() => faker.datatype.number({ min: 272.82, max: 284.50 })),
    insightText: "Tesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great companyTesla is a great company",
  },
  {
    id: uuidv4(),
    symbol: "$AAPL",
    company: "Apple Inc, NASDAQ",
    trend: "down",
    percentage: -1.51,
    timeframe: "Daily",
    price: 150.43,
    data: labels.map(() => faker.datatype.number({ min: 148.56, max: 151.47 })),
    insightText: "Apple is a great company",
  },
  {
    id: uuidv4(),
    symbol: "$MSFT",
    company: "Microsoft Corporation, NASDAQ",
    trend: "down",
    percentage: -1.27,
    timeframe: "Daily",
    price: 237.92 ,
    data: labels.map(() => faker.datatype.number({ min: 235.20, max: 241.13 })),
    insightText: "Microsoft is a great company",
  },
  {
    id: uuidv4(),
    symbol: "$AMZN",
    company: "Amazon.com, Inc., NASDAQ",
    trend: "down",
    percentage: -3.53,
    timeframe: "Daily",
    price: 113.78,
    data: labels.map(() => faker.datatype.number({ min: 112.06, max: 116.05 })),
    insightText: "Amazon is a great company",
  },
];

const ForYou: NextPage = () => {
  return (
    <div className="flex flex-col items-center py-2 sm:py-12">
      <FadeInFromTop>
        <h1 className="text-4xl font-bold mb-0">For You Page</h1>
      </FadeInFromTop>
      <FadeInFromTop>
        <h2 className="text-lg font-bold mt-0">Personalized insights at a glance</h2>
      </FadeInFromTop>
      <div className="grid grid-cols-1 gap-4 w-full place-items-center">
      {positions.map((position, index) => (
        <PositionCard key={position.id} {...position} />
      ))}
      </div>
    </div>
  );
};

export default ForYou;
