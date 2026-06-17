export default function SolutionsPage() {
  return (
    <div className="container py-24">
      <h1 className="text-5xl font-bold text-center">
        Industry Solutions
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="border rounded-3xl p-8">
          <h2 className="text-2xl font-bold">
            Schools & Universities
          </h2>

          <ul className="mt-6 space-y-2">
            <li>Student Management</li>
            <li>Learning Management</li>
            <li>Teacher Management</li>
            <li>Payroll</li>
          </ul>
        </div>

        <div className="border rounded-3xl p-8">
          <h2 className="text-2xl font-bold">
            Telecom Companies
          </h2>

          <ul className="mt-6 space-y-2">
            <li>Asset Tracking</li>
            <li>Procurement</li>
            <li>HRMS</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="border rounded-3xl p-8">
          <h2 className="text-2xl font-bold">
            Businesses
          </h2>

          <ul className="mt-6 space-y-2">
            <li>Accounting</li>
            <li>Inventory</li>
            <li>Sales</li>
            <li>CRM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}