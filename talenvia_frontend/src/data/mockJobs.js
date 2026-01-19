/**
 * Mock jobs data derived from the user-provided `mockTests` snippet.
 * We treat each "test" as a job opportunity and map fields accordingly.
 */

// PUBLIC_INTERFACE
export const mockJobs = [
  {
    id: "job-1",
    title: "Frontend Developer Test",
    company: "Talenvia Assessments",
    location: "Remote",
    level: "Mid",
    category: "Assessment",
    skill: "React",
    duration: "10 mins",
    totalQuestions: 5,
    description:
      "Role readiness assessment for Frontend Developer (React). Complete a short quiz to benchmark your fundamentals.",
    highlights: [
      "Includes 5 questions",
      "Estimated 10 minutes",
      "Covers core React concepts"
    ]
  }
];
