import { Card, CardContent } from "@/components/common/ui/card";
import InvoiceList from "./InvoiceList";
import AmountSummary from "./AmountSummary";

export default function AccountingCard() {
  return (
    <Card className="border-border bg-card2 mx-auto max-w-full overflow-hidden rounded-3xl border pb-0 shadow-sm sm:max-w-4xl md:pb-6">
      <CardContent className="relative">
        <div className="mb-6 sm:mb-10">
          <h2 className="text-card-foreground mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
            Real-time accounting at your fingertips.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
            Take the pain out of book keeping! Wave goodbye to mountains of
            paperwork and endless email reminders. There’s now a new way of
            accounting.
          </p>
        </div>

        <InvoiceList />
        <AmountSummary />
      </CardContent>
    </Card>
  );
}
