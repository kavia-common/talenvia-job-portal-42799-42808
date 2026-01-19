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
  // Metadata used for filtering/browsing (new; safe additive change).
  categories: ["Frontend", "React", "JavaScript", "CSS"],
  tags: ["basics", "timed", "quick"],
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
    categories: ["Frontend", "React", "JavaScript"],
    tags: ["intermediate", "timed"],
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
    categories: ["Frontend", "CSS"],
    tags: ["basics", "timed", "quick"],
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
    categories: ["Frontend", "JavaScript"],
    tags: ["basics", "timed", "quick"],
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

  {
    id: "html-accessibility-1",
    title: "HTML & Accessibility – Semantics and ARIA",
    categories: ["Frontend", "HTML", "Accessibility"],
    tags: ["basics", "timed", "quick"],
    duration: 15 * 60,
    questions: [
      {
        id: 1,
        question: "Which HTML element is most appropriate for the main navigation links of a page?",
        options: ["<div>", "<nav>", "<section>", "<main>"],
        correctAnswer: "<nav>",
      },
      {
        id: 2,
        question: "What is the purpose of the alt attribute on an <img> tag?",
        options: [
          "To load images faster",
          "To provide alternative text for screen readers and when the image fails to load",
          "To change the image resolution",
          "To make the image clickable",
        ],
        correctAnswer: "To provide alternative text for screen readers and when the image fails to load",
      },
      {
        id: 3,
        question: "When should ARIA attributes be used?",
        options: [
          "Always, for every element",
          "Only when semantic HTML cannot express the needed behavior/meaning",
          "Only in CSS",
          "Only for forms",
        ],
        correctAnswer: "Only when semantic HTML cannot express the needed behavior/meaning",
      },
      {
        id: 4,
        question: "Which attribute associates a <label> with a form control?",
        options: ["name", "for/htmlFor", "role", "tabIndex"],
        correctAnswer: "for/htmlFor",
      },
    ],
  },

  {
    id: "react-state-1",
    title: "React State – useState, useReducer, Immutability",
    categories: ["Frontend", "React", "JavaScript"],
    tags: ["intermediate", "timed"],
    duration: 18 * 60,
    questions: [
      {
        id: 1,
        question: "Why should React state updates be treated as immutable?",
        options: [
          "Because React won’t render otherwise",
          "Because immutable updates help React detect changes and avoid subtle bugs",
          "Because JavaScript objects cannot be mutated",
          "Because it improves CSS performance",
        ],
        correctAnswer: "Because immutable updates help React detect changes and avoid subtle bugs",
      },
      {
        id: 2,
        question: "Which hook is often a better fit than useState for complex state transitions?",
        options: ["useMemo", "useReducer", "useRef", "useLayoutEffect"],
        correctAnswer: "useReducer",
      },
      {
        id: 3,
        question: "Given setCount(c => c + 1), what does the function argument represent?",
        options: ["The next value", "The previous state value", "A DOM event", "A React element"],
        correctAnswer: "The previous state value",
      },
      {
        id: 4,
        question: "Which update pattern avoids mutating an array in state?",
        options: ["arr.push(x)", "arr.splice(0,1)", "[...arr, x]", "arr[0] = x"],
        correctAnswer: "[...arr, x]",
      },
    ],
  },

  {
    id: "react-effects-1",
    title: "React Effects – useEffect Patterns",
    categories: ["Frontend", "React", "JavaScript"],
    tags: ["intermediate", "timed"],
    duration: 18 * 60,
    questions: [
      {
        id: 1,
        question: "What is a common use of the cleanup function returned from useEffect?",
        options: [
          "To update props",
          "To unsubscribe/clear timers and prevent leaks when the component unmounts",
          "To force a re-render",
          "To change the dependency array",
        ],
        correctAnswer: "To unsubscribe/clear timers and prevent leaks when the component unmounts",
      },
      {
        id: 2,
        question: "If you omit the dependency array in useEffect, the effect runs:",
        options: ["Only once", "On every render", "Only on unmount", "Only when state changes"],
        correctAnswer: "On every render",
      },
      {
        id: 3,
        question: "Which dependency array will run the effect when `userId` changes?",
        options: ["[]", "[userId]", "[props]", "[setUserId]"],
        correctAnswer: "[userId]",
      },
      {
        id: 4,
        question: "What problem can occur if dependencies are missing from the array?",
        options: [
          "Faster performance always",
          "Stale closures leading to incorrect logic/data",
          "More CSS specificity",
          "Duplicate HTML tags",
        ],
        correctAnswer: "Stale closures leading to incorrect logic/data",
      },
    ],
  },

  {
    id: "ts-basics-1",
    title: "TypeScript Basics – Types, Interfaces, Narrowing",
    categories: ["Frontend", "TypeScript", "JavaScript"],
    tags: ["basics", "timed"],
    duration: 16 * 60,
    questions: [
      {
        id: 1,
        question: "Which TypeScript type represents an array of strings?",
        options: ["string[]", "array<string>", "strings()", "StringArray"],
        correctAnswer: "string[]",
      },
      {
        id: 2,
        question: "What is the primary purpose of TypeScript?",
        options: [
          "To run JavaScript faster",
          "To add static typing and tooling on top of JavaScript",
          "To replace HTML",
          "To compile CSS",
        ],
        correctAnswer: "To add static typing and tooling on top of JavaScript",
      },
      {
        id: 3,
        question: "What does type narrowing help TypeScript do?",
        options: [
          "Reduce bundle size",
          "Infer more specific types in a given branch of code",
          "Run code on the server",
          "Generate CSS variables",
        ],
        correctAnswer: "Infer more specific types in a given branch of code",
      },
      {
        id: 4,
        question: "Which keyword declares an interface?",
        options: ["interface", "type", "class", "enum"],
        correctAnswer: "interface",
      },
    ],
  },

  {
    id: "node-api-1",
    title: "Node.js APIs – REST, Status Codes, JSON",
    categories: ["Backend", "JavaScript", "APIs", "Node.js"],
    tags: ["basics", "timed"],
    duration: 20 * 60,
    questions: [
      {
        id: 1,
        question: "Which HTTP method is typically used to update an existing resource?",
        options: ["GET", "POST", "PUT/PATCH", "OPTIONS"],
        correctAnswer: "PUT/PATCH",
      },
      {
        id: 2,
        question: "What status code is commonly returned for a successful GET request?",
        options: ["200", "201", "204", "404"],
        correctAnswer: "200",
      },
      {
        id: 3,
        question: "Which header indicates the media type of the response body?",
        options: ["Authorization", "Content-Type", "Accept-Encoding", "Cache-Control"],
        correctAnswer: "Content-Type",
      },
      {
        id: 4,
        question: "What is a good practice when validating request payloads?",
        options: [
          "Never validate to reduce CPU usage",
          "Validate on the server and return helpful error messages",
          "Validate only in the database",
          "Only validate in the UI",
        ],
        correctAnswer: "Validate on the server and return helpful error messages",
      },
    ],
  },

  {
    id: "sql-basics-1",
    title: "SQL Basics – SELECT, WHERE, JOIN",
    categories: ["Backend", "SQL", "Databases"],
    tags: ["basics", "timed"],
    duration: 18 * 60,
    questions: [
      {
        id: 1,
        question: "Which SQL keyword is used to filter rows?",
        options: ["FILTER", "WHERE", "GROUP", "LIMIT"],
        correctAnswer: "WHERE",
      },
      {
        id: 2,
        question: "What does an INNER JOIN return?",
        options: [
          "All rows from the left table",
          "All rows from both tables",
          "Only matching rows between two tables",
          "Only non-matching rows",
        ],
        correctAnswer: "Only matching rows between two tables",
      },
      {
        id: 3,
        question: "Which clause limits the number of rows returned?",
        options: ["LIMIT", "TOP", "COUNT", "ORDER"],
        correctAnswer: "LIMIT",
      },
      {
        id: 4,
        question: "Which statement is used to sort results?",
        options: ["ORDER BY", "SORT BY", "GROUP BY", "RANGE BY"],
        correctAnswer: "ORDER BY",
      },
    ],
  },

  {
    id: "system-design-1",
    title: "System Design – Scalability & Tradeoffs",
    categories: ["Backend", "System Design"],
    tags: ["intermediate", "timed"],
    duration: 22 * 60,
    questions: [
      {
        id: 1,
        question: "What is caching primarily used for?",
        options: [
          "To make databases larger",
          "To reduce latency and load on downstream systems",
          "To increase CPU usage",
          "To replace authentication",
        ],
        correctAnswer: "To reduce latency and load on downstream systems",
      },
      {
        id: 2,
        question: "What is a tradeoff of aggressive caching?",
        options: [
          "Always perfectly fresh data",
          "Potentially stale data and invalidation complexity",
          "Higher network latency",
          "More SQL joins",
        ],
        correctAnswer: "Potentially stale data and invalidation complexity",
      },
      {
        id: 3,
        question: "What does horizontal scaling mean?",
        options: [
          "Upgrading a single server",
          "Adding more instances/servers to handle load",
          "Reducing memory",
          "Decreasing request throughput",
        ],
        correctAnswer: "Adding more instances/servers to handle load",
      },
      {
        id: 4,
        question: "Why use a load balancer?",
        options: [
          "To store user sessions permanently",
          "To distribute traffic across multiple instances",
          "To compile JavaScript",
          "To encrypt database columns",
        ],
        correctAnswer: "To distribute traffic across multiple instances",
      },
    ],
  },

  {
    id: "behavioral-1",
    title: "Behavioral Interview – STAR & Communication",
    categories: ["Behavioral"],
    tags: ["basics", "timed", "quick"],
    duration: 14 * 60,
    questions: [
      {
        id: 1,
        question: "What does STAR stand for in behavioral interviews?",
        options: [
          "Situation, Task, Action, Result",
          "System, Test, Apply, Repeat",
          "Scope, Timeline, Approach, Risk",
          "Study, Train, Answer, Review",
        ],
        correctAnswer: "Situation, Task, Action, Result",
      },
      {
        id: 2,
        question: "A good behavioral answer should primarily be:",
        options: [
          "Vague to sound flexible",
          "Specific and structured with clear outcomes",
          "Only about technical tools",
          "Only one sentence",
        ],
        correctAnswer: "Specific and structured with clear outcomes",
      },
      {
        id: 3,
        question: "When discussing a conflict, it’s best to focus on:",
        options: [
          "Blaming the other person",
          "Your process, communication, and what you learned",
          "Avoiding details entirely",
          "Only listing mistakes",
        ],
        correctAnswer: "Your process, communication, and what you learned",
      },
      {
        id: 4,
        question: "What is a strong closing for a behavioral story?",
        options: [
          "No result needed",
          "A clear result/impact and what you’d do next time",
          "An apology only",
          "A joke",
        ],
        correctAnswer: "A clear result/impact and what you’d do next time",
      },
    ],
  },

  {
    id: "frontend-performance-1",
    title: "Frontend Performance – Rendering, Bundles, UX",
    categories: ["Frontend", "React", "JavaScript", "Performance"],
    tags: ["intermediate", "timed"],
    duration: 20 * 60,
    questions: [
      {
        id: 1,
        question: "Which practice commonly improves perceived performance?",
        options: ["Large images everywhere", "Skeleton/loading states", "Blocking scripts", "No caching"],
        correctAnswer: "Skeleton/loading states",
      },
      {
        id: 2,
        question: "What is code splitting used for?",
        options: [
          "To merge files into one",
          "To load only needed code for a route/feature",
          "To increase CSS specificity",
          "To disable React",
        ],
        correctAnswer: "To load only needed code for a route/feature",
      },
      {
        id: 3,
        question: "What can help reduce unnecessary re-renders?",
        options: ["Random keys", "memo/useMemo/useCallback where appropriate", "Inline everything", "More useEffect"],
        correctAnswer: "memo/useMemo/useCallback where appropriate",
      },
      {
        id: 4,
        question: "What metric roughly captures how quickly the main content becomes visible?",
        options: ["FCP/LCP", "HTTP 500", "CSSOM", "DNS TTL"],
        correctAnswer: "FCP/LCP",
      },
    ],
  },

  {
    id: "debugging-1",
    title: "Debugging – Common Frontend Issues",
    categories: ["Frontend", "JavaScript", "React"],
    tags: ["intermediate", "timed"],
    duration: 16 * 60,
    questions: [
      {
        id: 1,
        question: "If the UI doesn’t update after a state change, a common cause is:",
        options: [
          "Mutating state directly instead of creating a new object/array",
          "Using semantic HTML",
          "Using const variables",
          "Adding more CSS classes",
        ],
        correctAnswer: "Mutating state directly instead of creating a new object/array",
      },
      {
        id: 2,
        question: "A quick way to verify a fetch request succeeded is to check:",
        options: ["CSS variables", "Network tab in DevTools", "HTML title tag", "The favicon"],
        correctAnswer: "Network tab in DevTools",
      },
      {
        id: 3,
        question: "What is a safe first step when debugging a runtime error?",
        options: [
          "Delete node_modules immediately",
          "Read the stack trace and reproduce the issue reliably",
          "Rewrite the app",
          "Disable all linting permanently",
        ],
        correctAnswer: "Read the stack trace and reproduce the issue reliably",
      },
      {
        id: 4,
        question: "If a component renders too often, you might inspect:",
        options: ["prop/state changes and memoization boundaries", "HTML doctype", "robots.txt", "package-lock.json"],
        correctAnswer: "prop/state changes and memoization boundaries",
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
