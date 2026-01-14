export default function ReportsPage() {
  return (
    <main style={{ padding: '80px' }}>
      <h1>Project Reports</h1>

      <ul>
        <li>
          <a href="/reports/Project_Proposal.pdf" target="_blank">
            Project Proposal
          </a>
        </li>

        <li>
          <a href="/reports/Project_Specifications.pdf" target="_blank">
            Project Specifications
          </a>
        </li>

        <li>
          <a href="/reports/HighLevelDesign.pdf" target="_blank">
            High Level Design
          </a>
        </li>

        <li>
          <a href="/reports/Analysis.pdf" target="_blank">
            Analysis Report
          </a>
        </li>
      </ul>
    </main>
  );
}
