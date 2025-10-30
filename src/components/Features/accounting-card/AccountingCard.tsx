import { Card, CardContent } from "@/components/common/ui/card";
import InvoiceList from "./InvoiceList";
import AmountSummary from "./AmountSummary";

export default function AccountingCard() {
  return (
    <Card className="rounded-3xl border border-border bg-card2 shadow-sm max-w-4xl mx-auto overflow-hidden">
      <CardContent className="relative">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Real-time accounting at your fingertips.</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders.
            There’s now a new way of accounting.
          </p>
        </div>

        <InvoiceList />
        <AmountSummary />
      </CardContent>
    </Card>
  );
}
