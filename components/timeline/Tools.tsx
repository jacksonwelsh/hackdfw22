import { useState } from "react";

export type FinanceState = {
  currInvestments: number;
  currCash: number;
  growth: number;
  annualInvestmentBase: number;
  annualContributionIncrease: number;
  year: number;
  birthYear: number;
  safetyNet: number;
};

const Tools: React.FC<FinanceState & { setFinances: Function }> = ({
  currCash,
  currInvestments,
  growth,
  annualInvestmentBase,
  annualContributionIncrease,
  year,
  birthYear,
  safetyNet,
  setFinances,
}) => {
  return (
    <div className="p-2 rounded-md bg-gray-800">
      <h3>Simulate investment adjustments</h3>
      <div className="my-2">
        <label>
          Annual investment growth
          <div className="flex gap-6">
            <input
              type="range"
              min={-0.25}
              max={0.5}
              step={0.001}
              className="w-3/4"
              value={growth}
              onChange={(e) =>
                setFinances((finances: FinanceState) => ({
                  ...finances,
                  growth: parseFloat(e.target.value),
                }))
              }
            />
            <span>{(growth * 100).toFixed(1)}%</span>
          </div>
        </label>
      </div>
      <div className="my-2">
        <label>
          Annual contribution base (how much will you contribute this year?)
          <div className="flex gap-6">
            <div className="relative mt-1 rounded-md shadow-sm w-3/4">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-300 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price"
                value={annualInvestmentBase}
                onChange={(e) =>
                  setFinances((finances: any) => ({
                    ...finances,
                    annualInvestmentBase: parseFloat(e.target.value),
                  }))
                }
                id="price"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-8"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-300 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="my-2">
        <label>
          Annual contribution growth (how much more do you contribute YoY?)
          <div className="flex gap-6">
            <input
              type="range"
              min={-0.25}
              max={0.5}
              step={0.001}
              className="w-3/4"
              value={annualContributionIncrease}
              onChange={(e) =>
                setFinances((finances: any) => ({
                  ...finances,
                  annualContributionIncrease: parseFloat(e.target.value),
                }))
              }
            />
            <span>{(annualContributionIncrease * 100).toFixed(1)}%</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Tools;
