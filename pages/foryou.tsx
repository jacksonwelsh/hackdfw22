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
    insightText: "Tesla finished strong today with a 3.44% increase after announcing increased shipping rates on the Model Y, and Model S in the United States. We reccomend you hold this position for the long term.",
    stockLogo: <svg stroke="currentColor" strokeWidth={0} fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"></path></svg>
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
    as it is unknown whether prices will continue to drop or if they will recover. If the value continues to decline, we may suggest moving your funds to a more stable position.",
    stockLogo: <svg stroke="currentColor" strokeWidth={0} fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
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
    insightText: "Microsoft is down today . Recent statistics and trends have shown a steep decline in value -- over $65 in the last six months. Microsoft has begun to \
    listen less to its consumer base, meaning overall opinion of the company is down. When opinion is down, so is value. We recommend selling and buying a more stable position.",
    stockLogo: <svg stroke="currentColor" strokeWidth={0} fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"></path></svg>
  },
  {
    id: uuidv4(),
    symbol: "$AMZN",
    company: "Amazon.com, Inc, NASDAQ",
    trend: "down",
    percentage: -3.53,
    timeframe: "Daily",
    price: 113.78,
    data: labels.map(() => faker.datatype.number({ min: 112.06, max: 116.05 })),
    insightText: "Amazon is down today, but recent trends show that the position is quite stable. Amazon continues to innovate and improve, so we firmly believe the price \
    will recover. No need to be concerned, we recommend keeping this position for now.",
    stockLogo: <svg stroke="currentColor" strokeWidth={0} fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"></path></svg>
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
