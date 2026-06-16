import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto">
          ERP, HR & LMS Solutions For Ethiopian Organizations
        </h1>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          Manage Finance, HR, Payroll, Students, Courses, Inventory and
          Operations from one powerful cloud platform.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button size="lg">
            Book Free Demo
          </Button>

          <Button
            size="lg"
            variant="secondary"
          >
            View Solutions
          </Button>
        </div>

        <div className="mt-14 text-blue-200">
          Trusted by Schools, Universities, Telecom Companies and Businesses
        </div>
      </div>
    </section>
  );
}