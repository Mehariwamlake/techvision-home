import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold">
          Ready To Transform Your Organization?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Book a free demo and see how TechVision can help your team.
        </p>

        <Button
          size="lg"
          variant="secondary"
          className="mt-8"
        >
          Schedule Demo
        </Button>
      </div>
    </section>
  );
}