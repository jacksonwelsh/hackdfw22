import { useState } from "react";
import Badge from "./Badge";

interface SegmentProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  year: number;
  yearUntil: number;
  status: "ok" | "warn" | "danger";
  cost?: string;
  steps?: Record<number, [number, number]>;
}
export type Status = "ok" | "danger" | "warn";

const Segment: React.FC<SegmentProps> = ({
  children,
  title,
  icon,
  year,
  yearUntil,
  status,
  cost,
  steps,
}) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });
  const [showBalances, setShow] = useState(false);

  return (
    <li className="mb-64 ml-6 min-h-fit md:min-h-0 snap-always snap-center">
      <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 text-blue-200 fill-current">
        <div className="h-5 w-5">{icon}</div>
      </span>

      <h2 className="mb-1 ml-2 mt-6 -translate-y-4">
        <div className="text-sm font-semibold tracking-widest text-gray-300 -mb-1">
          {year} - {yearUntil}
        </div>
        {title}
        <Badge variant={status}>
          {status === "ok"
            ? "Healthy"
            : status === "warn"
            ? "Warning"
            : "Danger"}
        </Badge>
        {cost && <span className="text-lg">Expected cost: {cost}</span>}
      </h2>
      <div className="ml-2">{children}</div>
      <button
        className="underline ml-2 my-2"
        onClick={() => setShow((b) => !b)}
      >
        show/hide balances
      </button>
      {showBalances && (
        <table className="ml-2">
          <thead>
            <tr>
              <th className="w-1/4">year</th>
              <th className="w-1/4">balance</th>
              <th className="w-1/4">contribution</th>
            </tr>
          </thead>
          <tbody>
            {steps &&
              Object.entries(steps).map(([thing, other]) => (
                <tr key={thing}>
                  <td>{thing}</td>
                  <td>{formatter.format(other[0])}</td>
                  <td>{formatter.format(other[1])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </li>
  );
};

export default Segment;
