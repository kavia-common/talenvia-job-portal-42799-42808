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

/**
 * Existing test list metadata used by the "Available tests" table UI.
 * (The actual question bank content is in `mockTestData` below.)
 *
 * NOTE: This is preserved for backward compatibility with any UI that expects:
 * { id, title, minutes, questions, difficulty }.
 */
export const mockTests = [
  {
    id: "frontend-basic-1",
    title: "Frontend Developer – Basic Mock Test",
    minutes: 20,
    questions: 3,
    difficulty: "Beginner",
  },
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

/**
 * User-provided mock test dataset (authoritative).
 * Duration is stored in seconds (e.g., 20 minutes * 60).
 *
 * IMPORTANT: Preserved for backward compatibility. Some pages may import and expect
 * a single "mockTestData" object.
 */
export const mockTestData = {
  id: "frontend-basic-1",
  title: "Frontend Developer – Basic Mock Test",
  duration: 20 * 60, // 20 minutes in seconds
  questions: [
    {
      id: 1,
      question: "What does React use to efficiently update the UI?",
      options: ["DOM", "Virtual DOM", "Shadow DOM", "Real DOM"],
      correctAnswer: "Virtual DOM",
    },
    {
      id: 2,
      question: "Which hook is used to manage state in a functional component?",
      options: ["useData", "useState", "useEffect", "useContext"],
      correctAnswer: "useState",
    },
    {
      id: 3,
      question: "Which CSS property controls layout alignment in Flexbox?",
      options: ["float", "position", "justify-content", "display"],
      correctAnswer: "justify-content",
    },
  ],
};

/**
 * Extended mock tests question banks.
 * Each test:
 * - id: string
 * - title: string
 * - duration: number (seconds)
 * - questions: [{ id, question, options, correctAnswer }]
 */
// PUBLIC_INTERFACE
export const mockTestsData = [
  // Keep the original single-bank dataset as the first entry for consistency.
  mockTestData,

  {
    id: "react-intermediate-1",
    title: "React – Intermediate Concepts",
    duration: 25 * 60,
    questions: [
      {
        id: 1,
        question: "Which hook is primarily used to optimize expensive calculations in React components?",
        options: ["useEffect", "useMemo", "useReducer", "useRef"],
        correctAnswer: "useMemo",
      },
      {
        id: 2,
        question: "What is the main purpose of React keys when rendering lists?",
        options: [
          "To style list items",
          "To identify elements and help React reconcile updates efficiently",
          "To enable event bubbling",
          "To prevent memory leaks",
        ],
        correctAnswer: "To identify elements and help React reconcile updates efficiently",
      },
      {
        id: 3,
        question: "Which pattern helps avoid prop drilling for deeply nested components?",
        options: ["Inline styles", "Context API", "setState", "Fragments"],
        correctAnswer: "Context API",
      },
      {
        id: 4,
        question: "A common reason a component re-renders unnecessarily is:",
        options: [
          "Using semantic HTML",
          "Passing newly created object/function props each render without memoization",
          "Using CSS variables",
          "Using strict mode",
        ],
        correctAnswer: "Passing newly created object/function props each render without memoization",
      },
      {
        id: 5,
        question: "When using useEffect, which dependency array value runs the effect only on mount/unmount?",
        options: ["No dependency array", "[]", "[props]", "[state]"],
        correctAnswer: "[]",
      },
    ],
  },

  {
    id: "css-fundamentals-1",
    title: "CSS Fundamentals – Layout & Specificity",
    duration: 15 * 60,
    questions: [
      {
        id: 1,
        question: "Which CSS property controls the spacing between flex items along the main axis?",
        options: ["align-items", "justify-content", "gap", "flex-wrap"],
        correctAnswer: "gap",
      },
      {
        id: 2,
        question: "Which selector typically has higher specificity?",
        options: [".btn.primary", "#submit", "button", "*"],
        correctAnswer: "#submit",
      },
      {
        id: 3,
        question: "In normal document flow, which property removes an element from the flow?",
        options: ["margin", "display: inline", "position: absolute", "padding"],
        correctAnswer: "position: absolute",
      },
      {
        id: 4,
        question: "What does box-sizing: border-box do?",
        options: [
          "It excludes borders from the box model",
          "It includes padding and border in the element’s total width/height",
          "It forces the element to be a block",
          "It disables margin collapsing",
        ],
        correctAnswer: "It includes padding and border in the element’s total width/height",
      },
    ],
  },

  {
    id: "js-basics-1",
    title: "JavaScript Basics – Types & Functions",
    duration: 12 * 60,
    questions: [
      {
        id: 1,
        question: "What is the result of typeof null in JavaScript?",
        options: ['"null"', '"object"', '"undefined"', '"number"'],
        correctAnswer: '"object"',
      },
      {
        id: 2,
        question: "Which of these creates a new array containing items that pass a test function?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        correctAnswer: "filter()",
      },
      {
        id: 3,
        question: "What is a closure?",
        options: [
          "A loop that never ends",
          "A function bundled with references to its surrounding state (lexical environment)",
          "A way to declare constants",
          "A method to sort arrays",
        ],
        correctAnswer: "A function bundled with references to its surrounding state (lexical environment)",
      },
      {
        id: 4,
        question: "Which statement about === is correct?",
        options: [
          "It performs type coercion before comparison",
          "It compares both value and type without coercion",
          "It compares only object references",
          "It is identical to =",
        ],
        correctAnswer: "It compares both value and type without coercion",
      },
    ],
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
