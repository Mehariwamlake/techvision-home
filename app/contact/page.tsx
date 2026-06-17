import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-24">
      <h1 className="text-5xl font-bold text-center">
        Book A Demo
      </h1>

      <div className="mt-12 space-y-6">
        <Input placeholder="Full Name" />
        <Input placeholder="Organization" />
        <Input placeholder="Email" />
        <Input placeholder="Phone Number" />

        <Button className="w-full bg-green-600">
          Schedule Demo
        </Button>
      </div>

      <div className="mt-10 text-center text-muted-foreground">
        info@techvision.edu.et
      </div>
    </div>
  );
}