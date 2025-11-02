import { Button } from "../common/ui/button";
import { Card } from "../common/ui/card";

const BalanceCard = () => (
  <Card className="border-border bg-card rounded-lg border p-4 lg:col-span-3">
    <div className="space-y-4">
      <div>
        <p className="text-muted-foreground mb-1 text-xs font-medium">
          Total Balance
        </p>
        <p className="text-xl">$350.0</p>
      </div>

      <Button variant="default" className="w-full rounded-lg">
        Transfer
      </Button>

      <div className="flex flex-1 flex-col justify-between space-y-3 pt-1">
        <hr />
        <div>
          <p className="text-muted-foreground mb-1 text-xs font-medium">
            Total Income
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl">$320.0</p>
          </div>
        </div>
        <hr />

        <div>
          <p className="text-md text-muted-foreground mb-1 font-medium">
            Total Expense
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl">$220.0</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);
export default BalanceCard;
