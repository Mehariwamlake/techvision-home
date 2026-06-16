import {
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  BookOpen,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "ERP Management",
    icon: Building2,
    description:
      "Finance, Accounting, Procurement, Inventory and Operations."
  },
  {
    title: "Human Resources",
    icon: Users,
    description:
      "Payroll, Attendance, Leave and Employee Management."
  },
  {
    title: "Learning Management",
    icon: GraduationCap,
    description:
      "Online Courses, Exams, Student Tracking and Certification."
  },
  {
    title: "Project Management",
    icon: Briefcase,
    description:
      "Track projects, tasks and team performance."
  },
  {
    title: "Student Information System",
    icon: BookOpen,
    description:
      "Manage admissions, grading and academic records."
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    description:
      "Real-time dashboards and business insights."
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">
          Everything In One Platform
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border rounded-xl p-8 hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 mb-4 text-blue-600" />

                <h3 className="font-semibold text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}