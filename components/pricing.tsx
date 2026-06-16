import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">
          Flexible Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              ERP Starter
            </h3>
            <p className="mt-4">
              ERP for growing businesses
            </p>
            <Button className="mt-6 w-full">
              Request Quote
            </Button>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Business Suite
            </h3>
            <p className="mt-4">
              ERP + HR Management
            </p>
            <Button className="mt-6 w-full">
              Request Quote
            </Button>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Education Suite
            </h3>
            <p className="mt-4">
              ERP + HR + LMS
            </p>
            <Button className="mt-6 w-full">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}