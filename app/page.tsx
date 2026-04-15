export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">TechVision LMS</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Courses</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="/hire-course-creator" className="hover:text-blue-400">Hire Creators</a>
        </div>
        

          <a href="/Get-started" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started

          </a>
  
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn Smarter with <span className="text-blue-500">TechVision LMS</span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          A modern learning platform to manage courses, track progress,
          and empower students and instructors with cutting-edge tools.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/Get-started" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Start Learning
          </a>
          <a href="https://learn.techvision.edu.et/lms/" className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-800">
            Explore Courses
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Course Management",
              desc: "Easily create, organize, and manage your courses in one place."
            },
            {
              title: "Progress Tracking",
              desc: "Monitor student performance with detailed analytics."
            },
            {
              title: "Interactive Learning",
              desc: "Engage students with quizzes, videos, and assignments."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                {feature.title}
              </h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold">
          Ready to transform your learning experience?
        </h3>
        <p className="text-gray-400 mt-4">
          Join thousands of learners and instructors today.
        </p>

        <button className="mt-6 bg-blue-600 px-8 py-3 rounded-xl text-lg hover:bg-blue-700">
          Join TechVision LMS
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} TechVision LMS. All rights reserved.
      </footer>

    </main>
  );
}