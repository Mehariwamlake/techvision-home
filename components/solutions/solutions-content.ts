// Solutions page copy of the product data to match with figma design
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  GraduationCap,
  icons,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { title } from "process";

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  name: string;
  short: string;
  tagline: string;
  lead?: string;
  description: string;
  image: string;
  features?: string[];
  cards?: FeatureCard[];
  startingPrice: number;
};

export const solutionsProducts: Product[] = [
  {
    slug: "lms",
    icon: BookOpen,
    name: "Learning Management System",
    short: "LMS",
    tagline: "Deliver world-class digital learning",
    description:
      "A complete LMS to create courses, track learner progress, run assessments, and deliver engaging blended learning at any scale.",
    image: "/dashboards/lms-dashboard.png",
    features: [
      "Course content management",
      "Student progress tracking",
      "Interactive assessments",
    ],
    startingPrice: 49,
  },
  {
    slug: "education-erp",
    icon: GraduationCap,
    name: "Education ERP",
    short: "Education ERP",
    tagline: "Run your entire institution from one place",
    description:
      "Manage admissions, fees, timetables, exams, and parent communication in a single platform built for schools and universities.",
    image: "/dashboards/education-erp-dashboard.png",
    cards: [
      {
        icon: ShieldCheck,
        title: "Administration",
        description: "Streamline daily operations.",
      },

      {
        icon: Wallet,
        title: "Fee Management",
        description: "Automate billing and payments.",
      },
    ],
    startingPrice: 79,
  },
  {
    slug: "erp",
    icon: Building2,
    name: "ERP System",
    short: "ERP",
    tagline: "One system to run your whole business",
    lead: "One system to run your whole business.",
    description:
      "Unify finance, inventory, sales, and supply chain with a modular ERP that gives leadership real-time visibility across operations.",
    image: "/dashboards/erp-dashboard.png",
    features: [
      "Financial reporting & analytics",
      "Inventory management",
      "Supply chain optimization",
    ],
    startingPrice: 99,
  },
  {
    slug: "hr",
    icon: Users,
    name: "HR Management System",
    short: "HR Management",
    tagline: "Empower your people operations",
    description:
      "Streamline hiring, payroll, attendance, and performance so your HR team can focus on people instead of paperwork.",
    image: "/dashboards/hr-dashboard.png",
    features: [
      "Payroll Automation",
      "Seamless and compliant processing.",
      "Analytics",
      "Deep dives into workforce metrics.",
    ],
    startingPrice: 59,
  },
];
