import Card from "../Card";
import LineChart from "./LineChart";
import { useState } from "react";
import PositionModal from "../PositionModal";

export type PositionCardProps = {
  id: string;
  symbol: string;
  company: string;
  trend: "up" | "down";
  percentage: number;
  timeframe: string;
  price: number;
  data: number[];
  insightText: string;
  stockLogo: React.ReactNode;
};

const PositionCard: React.FC<PositionCardProps> = ({
  symbol,
  company,
  trend,
  percentage,
  timeframe,
  price,
  data,
  insightText,
  stockLogo,
}) => {
  const [open, setOpen] = useState(false)

  const trendColor = percentage > 0 ? "text-green-500" : "text-red-500";

  return (
    <Card className="flex flex-col w-full sm:w-xl max-w-xl p-0 border-none bg-neutral-800">
      {/* info section */}
      <div className="flex items-center gap-2 p-2">
        {/* company logo */}
        <div className="flex">
          {stockLogo}
        </div>
        {/* ticker, company name, etc */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="flex-grow-0">{symbol}</span>
            <PositionModal open={open} setOpen={setOpen} modalTitle={symbol}><div className="flex flex-col gap-2 text-neutral-300">{insightText}</div></PositionModal>
            <button onClick={() => setOpen(true)} className="rounded-md flex items-center gap-2 text-sm bg-indigo-700 py-1 px-2 text-indigo-100 hover:bg-indigo-800">
              Insights
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </button>
          </div>
          <div className="text-xs text-neutral-300">{company}</div>
          <div className="flex items-center text-neutral-300">
            <span className="mr-4">{timeframe}</span>
            <span>
              {trend === "up" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              )}
            </span>
            <span className={`mr-auto ${trendColor}`}>{percentage}%</span>
            <span className="justify-self-end">Price: ${price}</span>
          </div>
        </div>
      </div>
      <div className="h-42 rounded-b-md bg-neutral-200"><LineChart data={data} /></div>
    </Card>
  );
};

export default PositionCard;
