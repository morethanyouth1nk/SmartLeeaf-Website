const reportGroups = [
  {
    course: "CMPE 491",
    title: "Senior Design Project I",
    description:
      "Reports prepared during the first semester of the SmartLeaf senior design project.",
    reports: [
      {
        title: "Project Proposal",
        file: "/reports/Project_Proposal.pdf",
        description: "Initial project idea, objectives, team information, and web page reference.",
      },
      {
        title: "Project Specifications Report",
        file: "/reports/Project_Specifications.pdf",
        description:
          "System requirements, constraints, professional responsibilities, and ethical considerations.",
      },
      {
        title: "Analysis Report",
        file: "/reports/Analysis.pdf",
        description:
          "Problem analysis, proposed system, functional requirements, system models, and use cases.",
      },
      {
        title: "High-Level Design Report",
        file: "/reports/HighLevelDesign.pdf",
        description:
          "System architecture, subsystem decomposition, deployment strategy, and design goals.",
      },
    ],
  },
  {
    course: "CMPE 492",
    title: "Senior Design Project II",
    description:
      "Reports prepared during the implementation, testing, and final evaluation phase.",
    reports: [
      {
        title: "Low-Level Design Report",
        file: "/reports/LowLevelDesign.pdf",
        description:
          "Detailed class interfaces, component structure, design trade-offs, and implementation-level decisions.",
      },
      {
        title: "Test Plan Report",
        file: "/reports/TestPlan.pdf",
        description:
          "Testing scope, methodology, environment, responsibilities, test cases, and risk mitigation.",
      },
      {
        title: "Final Report",
        file: "/reports/FinalReport.pdf",
        description:
          "Final architecture, implementation status, test results, project impact, technologies, and conclusion.",
      },
    ],
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf7]">
      <section className="relative px-6 py-20 md:py-28">
        <div className="absolute left-[-10rem] top-[-8rem] h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-96 w-96 rounded-full bg-lime-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/#home"
            className="mb-10 inline-flex rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-extrabold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
          >
            ← Back to Home
          </a>

          <div className="mb-14 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-700">
              SmartLeaf Documentation
            </div>

            <h1 className="text-5xl font-bold leading-tight text-gray-950 md:text-6xl">
              Project Reports
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              This page provides public access to the official SmartLeaf senior
              design project documents prepared for CMPE 491 and CMPE 492.
            </p>
          </div>

          <div className="grid gap-8">
            {reportGroups.map((group) => (
              <section
                key={group.course}
                className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5"
              >
                <div className="border-b border-emerald-100 bg-gradient-to-br from-emerald-950 via-emerald-800 to-green-700 p-7 text-white md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="font-sans text-sm font-extrabold uppercase tracking-[0.24em] text-lime-300">
                        {group.course}
                      </p>

                      <h2 className="mt-2 text-3xl font-bold">
                        {group.title}
                      </h2>

                      <p className="mt-3 max-w-3xl leading-7 text-emerald-50/80">
                        {group.description}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                      {group.reports.length} Documents
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 p-5 md:p-6">
                  {group.reports.map((report) => (
                    <a
                      key={report.title}
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[1.25rem] border border-gray-100 bg-[#f8faf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg hover:shadow-emerald-950/5"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-950 transition group-hover:text-emerald-700">
                            {report.title}
                          </h3>

                          <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                            {report.description}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-extrabold text-white transition group-hover:bg-emerald-800">
                          Open PDF →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-emerald-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
            <p className="text-sm font-semibold leading-7 text-gray-600">
              SmartLeaf · TED University · Department of Computer Engineering ·
              CMPE 491 / CMPE 492 Senior Design Project
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
