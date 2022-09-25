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
    insightText: "Despite announcing anticipated product lineups during 2022's Keynote event, Apple is underperforming. We recommend keeping an eye on this position,\
    as it is unknown whether prices will continue to drop or if they will recover. If value continues to decline, we may suggest moving your funds to a more stable position.",
  },
  {
    id: uuidv4(),
    symbol: "$MSFT",
    company: "Microsoft Corporation, NASDAQ",
    trend: "down",
    percentage: -1.27,
    timeframe: "Daily",
    price: 237.92,
    data: labels.map(() => faker.datatype.number({ min: 235.20, max: 241.13 })),
    insightText: "Microsoft is down today. Recent statistics and trends have shown a steep decline in value -- over $65 in the last six months. Microsoft has begun to \
    listen less to its consumer base, meaning overall opinion of the company is down. When opinion is down, so is value. We recommend selling and buying a more stable position.",
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
    insightText: "Amazon is down today, but recent trends show that the position is quite stable. Amazon continues to innovate and improve, so we firmly believe the price \
    will recover. No need to be concerned, we recommend keeping this position for now.",
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
