import { Button } from "../common/ui/button";
import { Card } from "../common/ui/card";

const BalanceCard = () => (
  <Card className="lg:col-span-3 p-4 rounded-lg border border-border bg-card">
    <div className="space-y-4">
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-1">Total Balance</p>
        <p className="text-xl  ">$350.0</p>
      </div>

      <Button variant="default" className="w-full rounded-lg">
        Transfer
      </Button>

      <div className="flex flex-col justify-between flex-1 space-y-3 pt-1">
        <hr />
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Total Income</p>
          <div className="flex items-center justify-between">
            <p className="text-xl  ">$320.0</p>
          </div>
        </div>
        <hr />

        <div>
          <p className="text-md font-medium text-muted-foreground mb-1">Total Expense</p>
          <div className="flex items-center justify-between">
            <p className="text-xl ">$220.0</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);
export default BalanceCard;
