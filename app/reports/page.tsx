export default function ReportsPage() {
const reports = [
  {
    title: "Project Proposal",
    file: "/reports/Project_Proposal.pdf",
    description: "Initial project proposal and objectives",
  },
  {
    title: "Project Specifications Report",
    file: "/reports/Project_Specifications.pdf",
    description: "Detailed system requirements and specifications",
  },
  {
    title: "Analysis Report",
    file: "/reports/Analysis.pdf",
    description: "Problem analysis, methodology, and evaluation",
  },
  {
    title: "High Level Design Report",
    file: "/reports/HighLevelDesign.pdf",
    description: "Overall system architecture and design decisions",
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Project Reports
        </h1>
        <p className="text-gray-600 mb-10">
          Access all official SmartLeaf project documents below.
        </p>

        <div className="grid gap-6">
          {reports.map((report) => (
            <a
              key={report.title}
              href={report.file}
              target="_blank"
              className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                    {report.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {report.description}
                  </p>
                </div>
                <span className="text-green-600 text-lg font-medium">
                  PDF →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
