import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "ERP Starter",
    desc: "Accounting, Inventory, Sales",
  },
  {
    name: "Business Suite",
    desc: "ERP + HRMS",
  },
  {
    name: "Education Suite",
    desc: "ERP + HRMS + LMS",
  },
];

export default function PricingPage() {
  return (
    <div className="container py-24">
      <h1 className="text-5xl font-bold text-center">
        Flexible Pricing
      </h1>

      <p className="text-center text-muted-foreground mt-4">
        Pricing tailored to your organization.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4">
                {plan.desc}
              </p>

              <div className="mt-8">
                Starting from ETB XXXX/month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}