export default function Solutions() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">
          Solutions Built For Your Industry
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Schools & Universities
            </h3>

            <ul className="mt-4 space-y-2">
              <li>✓ Student Management</li>
              <li>✓ Learning Management System</li>
              <li>✓ HR & Payroll</li>
              <li>✓ Examination Management</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Telecom Companies
            </h3>

            <ul className="mt-4 space-y-2">
              <li>✓ Asset Management</li>
              <li>✓ Procurement</li>
              <li>✓ Workforce Tracking</li>
              <li>✓ Financial Reporting</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Businesses
            </h3>

            <ul className="mt-4 space-y-2">
              <li>✓ Accounting</li>
              <li>✓ Inventory</li>
              <li>✓ HR Management</li>
              <li>✓ CRM & Sales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}