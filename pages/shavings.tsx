import type { NextPage } from "next";
import Card from "../components/Card";

const Shavings: NextPage = () => {
  return (
    <main className="flex-col">
      <div className="text-center pb-10">
        <h1>Shavings</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 px-10">
        <Card>
          <h2>$5.00 from purchase at "Sample place"</h2>
          <h4>That's $76.43 retirement dollars!</h4>
        </Card>
        <Card>
          <h2>$10.00 from purchase at "Sample place"</h2>
          <h4>That's $154.11 retirement dollars!</h4>
        </Card>
        <Card>
          <h2>Deposit into 401k.</h2>
        </Card>
        <Card>
          <h2>Pay Credit Card debt.</h2>
        </Card>
        <Card>
          <h2>Hire an Escort. (sus)</h2>
        </Card>
      </div>
    </main>
  );
};

export default Shavings;
