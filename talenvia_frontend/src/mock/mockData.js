/** Mock data used when backend is not configured. */

export const mockJobs = [
  {
    id: "job_1",
    title: "Frontend Engineer (React)",
    company: "Aurum Labs",
    location: "Remote",
    type: "Full-time",
    salaryRange: "$90k–$130k",
    tags: ["React", "TypeScript", "UI"],
    description:
      "Build refined, accessible UI experiences with elegant design systems. Collaborate with product and design to ship delightful features.",
  },
  {
    id: "job_2",
    title: "Backend Engineer (Node.js)",
    company: "Silverline Systems",
    location: "New York, NY",
    type: "Hybrid",
    salaryRange: "$105k–$150k",
    tags: ["Node.js", "APIs", "PostgreSQL"],
    description:
      "Design reliable APIs and scalable services. Improve performance, observability, and developer workflows across the stack.",
  },
  {
    id: "job_3",
    title: "Data Analyst",
    company: "Violet Insights",
    location: "Austin, TX",
    type: "On-site",
    salaryRange: "$75k–$105k",
    tags: ["SQL", "Dashboards", "Business"],
    description:
      "Turn data into actionable insights. Partner with stakeholders to build dashboards and reporting that unlock measurable improvements.",
  },
];

export const mockUserProfile = {
  fullName: "Alex Morgan",
  headline: "Junior Software Engineer",
  location: "Remote",
  skills: ["React", "JavaScript", "CSS", "APIs"],
  bio: "I’m exploring frontend roles and practicing interviews with mock tests and challenges. I enjoy building clean, accessible interfaces.",
};

export const mockTests = [
  {
    id: "test_1",
    title: "React Fundamentals",
    minutes: 20,
    questions: 8,
    difficulty: "Beginner",
  },
  {
    id: "test_2",
    title: "JavaScript & DOM",
    minutes: 25,
    questions: 10,
    difficulty: "Intermediate",
  },
  {
    id: "test_3",
    title: "System Design Basics",
    minutes: 30,
    questions: 10,
    difficulty: "Intermediate",
  },
];

export const mockChallenges = [
  {
    id: "challenge_1",
    title: "7-Day Apply Sprint",
    description: "Apply to 5 curated roles each day. Track progress and stay consistent.",
    progress: 3,
    goal: 7,
  },
  {
    id: "challenge_2",
    title: "Mock Test Marathon",
    description: "Complete 3 mock tests in one week and review all missed topics.",
    progress: 1,
    goal: 3,
  },
  {
    id: "challenge_3",
    title: "Portfolio Polish",
    description: "Refine resume + portfolio and request 2 feedback reviews.",
    progress: 1,
    goal: 2,
  },
];
