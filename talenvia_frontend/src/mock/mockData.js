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
      explanation:
        "React uses a Virtual DOM to compute UI changes efficiently and update the real DOM in minimal operations.",
    },
    {
      id: 2,
      question: "Which hook is used to manage state in a functional component?",
      options: ["useData", "useState", "useEffect", "useContext"],
      correctAnswer: "useState",
      explanation:
        "useState lets functional components store and update local component state (e.g., counters, form values, toggles).",
    },
    {
      id: 3,
      question: "Which CSS property controls layout alignment in Flexbox?",
      options: ["float", "position", "justify-content", "display"],
      correctAnswer: "justify-content",
      explanation:
        "justify-content controls how flex items are aligned along the main axis (e.g., start, center, space-between).",
    },
    {
      id: 4,
      question: "Which HTML element is best suited for wrapping the main content of a page?",
      options: ["<header>", "<main>", "<footer>", "<aside>"],
      correctAnswer: "<main>",
      explanation:
        "<main> represents the dominant content of the <body>. It improves semantics and accessibility for assistive technologies.",
    },
    {
      id: 5,
      question: "In CSS, which unit is relative to the root element’s font size?",
      options: ["em", "rem", "px", "%"],
      correctAnswer: "rem",
      explanation:
        "rem is based on the root (html) font size, which makes it predictable for consistent scaling across components.",
    },
    {
      id: 6,
      question: "Which React prop is used to render conditional content within JSX?",
      options: ["if", "switch", "JavaScript expressions (e.g., &&, ?:) ", "renderIf"],
      correctAnswer: "JavaScript expressions (e.g., &&, ?:) ",
      explanation:
        "JSX doesn’t support 'if' as a prop. Conditional rendering is done using JavaScript expressions like && or the ternary operator.",
    },
    {
      id: 7,
      question: "Which event is commonly used to update state from an input field?",
      options: ["onHover", "onChange", "onSubmit", "onLoad"],
      correctAnswer: "onChange",
      explanation:
        "onChange fires when the input value changes; it’s the standard way to update React state for controlled inputs.",
    },
    {
      id: 8,
      question: "What does `Array.prototype.map()` return?",
      options: ["A single value", "A new array", "A boolean", "Nothing (undefined)"],
      correctAnswer: "A new array",
      explanation:
        "map() transforms each element and returns a new array of the same length, leaving the original array unchanged.",
    },
    {
      id: 9,
      question: "Which CSS property sets the space between grid rows and columns?",
      options: ["spacing", "grid-gap/gap", "grid-space", "margin"],
      correctAnswer: "grid-gap/gap",
      explanation:
        "gap (formerly grid-gap) sets spacing between rows and columns in CSS Grid (and can also work with Flexbox).",
    },
    {
      id: 10,
      question: "Which React hook is used to run side effects (e.g., data fetching)?",
      options: ["useMemo", "useEffect", "useReducer", "useState"],
      correctAnswer: "useEffect",
      explanation:
        "useEffect is designed for side effects like data fetching, subscriptions, and manual DOM interactions after rendering.",
    },
    {
      id: 11,
      question: "Which HTTP status code commonly indicates a successful resource creation?",
      options: ["200", "201", "204", "404"],
      correctAnswer: "201",
      explanation:
        "201 Created indicates a request succeeded and resulted in a new resource being created (often returned by POST).",
    },
    {
      id: 12,
      question: "What does `preventDefault()` typically do in an event handler?",
      options: [
        "Stops React from rendering",
        "Prevents the browser’s default action (e.g., form submit reload)",
        "Removes the event listener",
        "Cancels all network requests",
      ],
      correctAnswer: "Prevents the browser’s default action (e.g., form submit reload)",
      explanation:
        "preventDefault() stops the browser’s default behavior (like navigating or reloading on form submit), allowing custom handling.",
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
      {
        id: 6,
        question: "What does React.memo primarily help with?",
        options: [
          "Managing global state",
          "Preventing unnecessary re-renders when props haven't changed",
          "Handling side effects",
          "Replacing keys in lists",
        ],
        correctAnswer: "Preventing unnecessary re-renders when props haven't changed",
      },
      {
        id: 7,
        question: "Which hook is designed to store a mutable value that does not trigger re-renders when changed?",
        options: ["useRef", "useMemo", "useEffect", "useState"],
        correctAnswer: "useRef",
      },
      {
        id: 8,
        question: "What is the correct way to pass a callback to setState when the next state depends on the previous?",
        options: ["setState(state + 1)", "setState(() => state + 1)", "setState(prev => prev + 1)", "setState(prev++)"],
        correctAnswer: "setState(prev => prev + 1)",
      },
      {
        id: 9,
        question: "Which statement about React Context is most accurate?",
        options: [
          "It is only for styling components",
          "It helps share values without passing props through every level",
          "It replaces all state management needs",
          "It can only be used in class components",
        ],
        correctAnswer: "It helps share values without passing props through every level",
      },
      {
        id: 10,
        question: "When should you typically use useCallback?",
        options: [
          "To memoize computed values",
          "To memoize a function reference passed to child components",
          "To replace useEffect",
          "To fetch data on mount",
        ],
        correctAnswer: "To memoize a function reference passed to child components",
      },
      {
        id: 11,
        question: "A 'controlled component' in React refers to:",
        options: [
          "A component with Redux",
          "A form element whose value is controlled by React state",
          "A component that never re-renders",
          "A component using only refs",
        ],
        correctAnswer: "A form element whose value is controlled by React state",
      },
      {
        id: 12,
        question: "What problem does useEffect cleanup help prevent?",
        options: [
          "Props drilling",
          "Memory leaks from subscriptions/timers when unmounting",
          "CSS specificity issues",
          "Overfetching on the server",
        ],
        correctAnswer: "Memory leaks from subscriptions/timers when unmounting",
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
      {
        id: 5,
        question: "Which display value makes an element a flex container?",
        options: ["display: block", "display: inline", "display: flex", "display: grid"],
        correctAnswer: "display: flex",
      },
      {
        id: 6,
        question: "Which property aligns items along the cross axis in a flex container?",
        options: ["justify-content", "align-items", "gap", "flex-direction"],
        correctAnswer: "align-items",
      },
      {
        id: 7,
        question: "In CSS Grid, which property defines the columns?",
        options: ["grid-template-columns", "grid-column-gap", "grid-auto-flow", "grid-row"],
        correctAnswer: "grid-template-columns",
      },
      {
        id: 8,
        question: "Which unit is relative to the element’s own font size?",
        options: ["rem", "em", "px", "vh"],
        correctAnswer: "em",
      },
      {
        id: 9,
        question: "What does `position: sticky` do?",
        options: [
          "Always positions the element relative to the viewport",
          "Toggles between relative and fixed based on scroll position",
          "Removes the element from the document flow",
          "Disables scrolling",
        ],
        correctAnswer: "Toggles between relative and fixed based on scroll position",
      },
      {
        id: 10,
        question: "Which rule will generally override the others due to specificity?",
        options: ["p { }", ".card p { }", "#main p { }", "* { }"],
        correctAnswer: "#main p { }",
      },
      {
        id: 11,
        question: "What does `overflow: hidden` commonly do?",
        options: [
          "Hides content that spills outside the element’s box",
          "Forces content to wrap",
          "Adds a scrollbar always",
          "Disables hover styles",
        ],
        correctAnswer: "Hides content that spills outside the element’s box",
      },
      {
        id: 12,
        question: "Which shorthand sets all four margins in one declaration?",
        options: ["margin: top right bottom left", "margin-all", "spacing", "box-margin"],
        correctAnswer: "margin: top right bottom left",
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
      {
        id: 5,
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "define", "static"],
        correctAnswer: "let",
      },
      {
        id: 6,
        question: "What does Array.prototype.reduce() do?",
        options: [
          "Creates a new array from existing one",
          "Executes a reducer function to produce a single accumulated value",
          "Filters out falsey values automatically",
          "Sorts the array numerically by default",
        ],
        correctAnswer: "Executes a reducer function to produce a single accumulated value",
      },
      {
        id: 7,
        question: "Which of these is NOT a primitive type in JavaScript?",
        options: ["string", "number", "object", "boolean"],
        correctAnswer: "object",
      },
      {
        id: 8,
        question: "What does `this` typically refer to inside a regular function (non-arrow) when called as obj.fn()?",
        options: ["The global object always", "The function itself", "The object `obj`", "Undefined always"],
        correctAnswer: "The object `obj`",
      },
      {
        id: 9,
        question: "How do you create a shallow copy of an object?",
        options: ["Object.copy(obj)", "{ ...obj }", "obj.clone()", "JSON.stringify(obj)"],
        correctAnswer: "{ ...obj }",
      },
      {
        id: 10,
        question: "What is the purpose of try/catch?",
        options: [
          "To stop all errors in the program permanently",
          "To handle exceptions and keep execution from crashing",
          "To create asynchronous code",
          "To convert strings to numbers",
        ],
        correctAnswer: "To handle exceptions and keep execution from crashing",
      },
      {
        id: 11,
        question: "Which statement best describes an arrow function?",
        options: [
          "It has its own `this` binding always",
          "It does not have its own `this` binding and captures from surrounding scope",
          "It can only return numbers",
          "It must be named",
        ],
        correctAnswer: "It does not have its own `this` binding and captures from surrounding scope",
      },
      {
        id: 12,
        question: "What does `Promise.all([...])` do?",
        options: [
          "Resolves when all promises resolve (or rejects when one rejects)",
          "Runs promises one-by-one sequentially",
          "Cancels all promises on error",
          "Turns promises into callbacks",
        ],
        correctAnswer: "Resolves when all promises resolve (or rejects when one rejects)",
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
      {
        id: 5,
        question: "Which element should be used for the primary page heading?",
        options: ["<h6>", "<h1>", "<p>", "<strong>"],
        correctAnswer: "<h1>",
      },
      {
        id: 6,
        question: "What does `aria-label` provide?",
        options: [
          "A CSS class for styling",
          "An accessible name for elements that lack visible text",
          "A way to set focus order",
          "A replacement for alt text on images always",
        ],
        correctAnswer: "An accessible name for elements that lack visible text",
      },
      {
        id: 7,
        question: "Which input attribute hints to browsers what type of data is expected (improves mobile keyboards too)?",
        options: ["role", "type", "aria-live", "tabIndex"],
        correctAnswer: "type",
      },
      {
        id: 8,
        question: "Which attribute makes an element focusable via keyboard in the natural tab order?",
        options: ["tabIndex=0", "tabIndex=-1", "role=listbox", "aria-hidden=true"],
        correctAnswer: "tabIndex=0",
      },
      {
        id: 9,
        question: "For decorative images, a common accessibility pattern is:",
        options: ["Use alt='decorative'", "Omit src", 'Use empty alt=""', "Use role='img' always"],
        correctAnswer: 'Use empty alt=""',
      },
      {
        id: 10,
        question: "What does `aria-live=\"polite\"` indicate?",
        options: [
          "Updates should interrupt the user immediately",
          "Updates should be announced when convenient without interrupting",
          "The element should be hidden",
          "The element is clickable",
        ],
        correctAnswer: "Updates should be announced when convenient without interrupting",
      },
      {
        id: 11,
        question: "Which HTML element is appropriate for a standalone self-contained piece of content (e.g., a blog post card)?",
        options: ["<article>", "<span>", "<b>", "<meta>"],
        correctAnswer: "<article>",
      },
      {
        id: 12,
        question: "Why is semantic HTML preferred over generic <div> usage for accessibility?",
        options: [
          "It reduces JavaScript bundle size",
          "It provides meaning/structure for assistive technologies by default",
          "It prevents network requests",
          "It automatically adds animations",
        ],
        correctAnswer: "It provides meaning/structure for assistive technologies by default",
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
      {
        id: 5,
        question: "What is a common pitfall when updating state that depends on previous state?",
        options: [
          "Using functional updates",
          "Using the current state variable directly (stale state) in rapid updates",
          "Using useReducer",
          "Using immutability",
        ],
        correctAnswer: "Using the current state variable directly (stale state) in rapid updates",
      },
      {
        id: 6,
        question: "In a reducer pattern, what is an action?",
        options: [
          "A direct mutation of state",
          "An object describing what happened (often with a type and payload)",
          "A React component",
          "A CSS selector",
        ],
        correctAnswer: "An object describing what happened (often with a type and payload)",
      },
      {
        id: 7,
        question: "Why might you choose useReducer over useState?",
        options: [
          "To avoid writing any logic",
          "To manage multiple related state values with clearer transitions",
          "To make components class-based",
          "To access the DOM directly",
        ],
        correctAnswer: "To manage multiple related state values with clearer transitions",
      },
      {
        id: 8,
        question: "Which operation creates a new object while overriding a field?",
        options: ["obj.field = x", "Object.assign(obj, { field: x })", "{ ...obj, field: x }", "delete obj.field"],
        correctAnswer: "{ ...obj, field: x }",
      },
      {
        id: 9,
        question: "When updating nested state, a common approach is to:",
        options: [
          "Mutate deeply and hope React notices",
          "Create new objects/arrays along the path you change",
          "Only change CSS classes",
          "Use document.querySelector",
        ],
        correctAnswer: "Create new objects/arrays along the path you change",
      },
      {
        id: 10,
        question: "What does batching in React generally refer to?",
        options: [
          "Bundling CSS files",
          "Combining multiple state updates into a single render for efficiency",
          "Grouping HTML tags",
          "Caching API calls",
        ],
        correctAnswer: "Combining multiple state updates into a single render for efficiency",
      },
      {
        id: 11,
        question: "What is a good reason to keep state as minimal as possible?",
        options: [
          "It makes CSS faster",
          "Derived data can be computed from existing state/props, reducing bugs and duplication",
          "It makes hooks unnecessary",
          "It prevents network errors",
        ],
        correctAnswer: "Derived data can be computed from existing state/props, reducing bugs and duplication",
      },
      {
        id: 12,
        question: "Which of these is typically NOT suitable for React state?",
        options: ["Form input value", "A timer ID stored in a ref", "UI toggle flags", "Fetched data"],
        correctAnswer: "A timer ID stored in a ref",
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
      {
        id: 5,
        question: "Which is a common pattern for fetching data in useEffect?",
        options: [
          "Call fetch directly in the render body",
          "Trigger fetch in useEffect and store results in state",
          "Only fetch inside reducers",
          "Fetch in CSS",
        ],
        correctAnswer: "Trigger fetch in useEffect and store results in state",
      },
      {
        id: 6,
        question: "Why should you avoid making the effect callback itself `async`?",
        options: [
          "Because React will crash immediately",
          "Because the callback must return nothing or a cleanup function, not a Promise",
          "Because async functions are slower",
          "Because it breaks JSX parsing",
        ],
        correctAnswer: "Because the callback must return nothing or a cleanup function, not a Promise",
      },
      {
        id: 7,
        question: "If you need to run an effect only once on mount, you typically use:",
        options: ["No dependency array", "[]", "[props]", "[state]"],
        correctAnswer: "[]",
      },
      {
        id: 8,
        question: "What is a 'stale closure' in the context of useEffect?",
        options: [
          "A CSS bug with z-index",
          "An effect reading outdated variables captured from an earlier render",
          "A missing React key",
          "A server-side rendering mismatch",
        ],
        correctAnswer: "An effect reading outdated variables captured from an earlier render",
      },
      {
        id: 9,
        question: "When listening to window events (e.g., resize), a good practice is to:",
        options: [
          "Add listeners in render",
          "Add listener in useEffect and remove it in cleanup",
          "Never remove listeners",
          "Only use inline HTML handlers",
        ],
        correctAnswer: "Add listener in useEffect and remove it in cleanup",
      },
      {
        id: 10,
        question: "Including a function in the dependency array may cause re-runs because:",
        options: [
          "Functions are always equal",
          "Functions may be re-created each render unless memoized",
          "React forbids functions in arrays",
          "It disables cleanup",
        ],
        correctAnswer: "Functions may be re-created each render unless memoized",
      },
      {
        id: 11,
        question: "What does React StrictMode do to some effects in development?",
        options: [
          "Runs them only once always",
          "May run them twice (mount/unmount/mount) to help find side-effect issues",
          "Disables them entirely",
          "Turns them into async functions",
        ],
        correctAnswer: "May run them twice (mount/unmount/mount) to help find side-effect issues",
      },
      {
        id: 12,
        question: "What should you do to prevent setting state on an unmounted component after an async operation?",
        options: [
          "Use a mounted flag / abort controller and check before setting state",
          "Ignore it; React handles it always",
          "Always use setTimeout",
          "Only use class components",
        ],
        correctAnswer: "Use a mounted flag / abort controller and check before setting state",
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
      {
        id: 5,
        question: "Which type represents a value that can be one of several string literals?",
        options: ["union type", "any", "never", "unknown"],
        correctAnswer: "union type",
      },
      {
        id: 6,
        question: "What is the difference between `any` and `unknown`?",
        options: [
          "`unknown` is safer because you must narrow it before use",
          "`any` is safer because it prevents runtime errors",
          "They are identical",
          "`unknown` disables type checking completely",
        ],
        correctAnswer: "`unknown` is safer because you must narrow it before use",
      },
      {
        id: 7,
        question: "What does the `never` type typically indicate?",
        options: [
          "A value that is always null",
          "A function that never returns (throws or infinite loop)",
          "A value that can be anything",
          "A value that is optional",
        ],
        correctAnswer: "A function that never returns (throws or infinite loop)",
      },
      {
        id: 8,
        question: "Which operator is commonly used for non-null assertion in TypeScript?",
        options: ["??", "!", "?.", ":"],
        correctAnswer: "!",
      },
      {
        id: 9,
        question: "Which is a common way to narrow a union type at runtime?",
        options: ["JSON.parse", "typeof / instanceof checks", "CSS selectors", "import statements"],
        correctAnswer: "typeof / instanceof checks",
      },
      {
        id: 10,
        question: "What does `readonly` do in an interface/type?",
        options: [
          "Prevents the property from being changed after initialization",
          "Makes the property optional",
          "Makes the property private",
          "Deletes the property at runtime",
        ],
        correctAnswer: "Prevents the property from being changed after initialization",
      },
      {
        id: 11,
        question: "Which syntax marks an interface property as optional?",
        options: ["prop?: string", "prop!: string", "prop: string | undefined only", "prop = string"],
        correctAnswer: "prop?: string",
      },
      {
        id: 12,
        question: "What is a generic used for?",
        options: [
          "To hardcode types",
          "To create reusable components/functions that work with multiple types",
          "To remove type checking",
          "To style JSX",
        ],
        correctAnswer: "To create reusable components/functions that work with multiple types",
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
      {
        id: 5,
        question: "Which status code indicates the client is not authorized (authentication required/failed)?",
        options: ["400", "401", "403", "500"],
        correctAnswer: "401",
      },
      {
        id: 6,
        question: "Which status code indicates the client is forbidden even if authenticated?",
        options: ["401", "403", "404", "409"],
        correctAnswer: "403",
      },
      {
        id: 7,
        question: "What does REST emphasize?",
        options: [
          "Only GraphQL APIs",
          "Stateless interactions and resources identified by URLs",
          "Persistent TCP connections always",
          "Storing session in HTML",
        ],
        correctAnswer: "Stateless interactions and resources identified by URLs",
      },
      {
        id: 8,
        question: "In JSON, which is valid?",
        options: ['{name: "A"}', '{"name":"A"}', "{'name':'A'}", '{"name":A}'],
        correctAnswer: '{"name":"A"}',
      },
      {
        id: 9,
        question: "Which header is commonly used to send a bearer token?",
        options: ["Content-Type", "Authorization", "Accept", "Host"],
        correctAnswer: "Authorization",
      },
      {
        id: 10,
        question: "What is a common strategy to version a REST API?",
        options: ["Put version in CSS", "Use a URL prefix like /v1", "Use only cookies", "Use HTML meta tags"],
        correctAnswer: "Use a URL prefix like /v1",
      },
      {
        id: 11,
        question: "Which status code often indicates a successful request with no response body?",
        options: ["200", "201", "204", "422"],
        correctAnswer: "204",
      },
      {
        id: 12,
        question: "What does middleware commonly do in Node/Express style apps?",
        options: [
          "Only styles HTML",
          "Runs between request and response to handle tasks like auth/logging/parsing",
          "Compiles TypeScript in the browser",
          "Stores data permanently",
        ],
        correctAnswer: "Runs between request and response to handle tasks like auth/logging/parsing",
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
      {
        id: 5,
        question: "Which function counts rows?",
        options: ["SUM()", "COUNT()", "AVG()", "JOIN()"],
        correctAnswer: "COUNT()",
      },
      {
        id: 6,
        question: "Which SQL clause groups rows for aggregation?",
        options: ["GROUP BY", "ORDER BY", "HAVING", "UNION"],
        correctAnswer: "GROUP BY",
      },
      {
        id: 7,
        question: "What does HAVING do?",
        options: [
          "Filters rows before grouping",
          "Filters groups after aggregation",
          "Sorts the final output",
          "Limits results to top N",
        ],
        correctAnswer: "Filters groups after aggregation",
      },
      {
        id: 8,
        question: "Which JOIN returns all rows from the left table and matches from the right table when available?",
        options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "CROSS JOIN"],
        correctAnswer: "LEFT JOIN",
      },
      {
        id: 9,
        question: "What does DISTINCT do?",
        options: ["Sorts data", "Removes duplicate rows from the result set", "Adds a column", "Creates an index"],
        correctAnswer: "Removes duplicate rows from the result set",
      },
      {
        id: 10,
        question: "Which statement combines results of two SELECT queries (removing duplicates by default)?",
        options: ["MERGE", "UNION", "JOIN", "GROUP"],
        correctAnswer: "UNION",
      },
      {
        id: 11,
        question: "Which keyword is used to insert data?",
        options: ["ADD", "INSERT INTO", "APPEND", "PUT"],
        correctAnswer: "INSERT INTO",
      },
      {
        id: 12,
        question: "What does a primary key ensure?",
        options: [
          "Rows are always sorted",
          "Each row has a unique identifier (not null and unique)",
          "Queries always run fast",
          "Tables cannot be joined",
        ],
        correctAnswer: "Each row has a unique identifier (not null and unique)",
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
      {
        id: 5,
        question: "What is a common reason to add a queue (e.g., RabbitMQ/SQS) to a system?",
        options: [
          "To slow down users",
          "To decouple services and handle background work asynchronously",
          "To remove the need for databases",
          "To eliminate HTTP",
        ],
        correctAnswer: "To decouple services and handle background work asynchronously",
      },
      {
        id: 6,
        question: "What does 'single point of failure' mean?",
        options: [
          "A component that improves reliability",
          "A component whose failure can take down the entire system",
          "A feature flag",
          "A caching strategy",
        ],
        correctAnswer: "A component whose failure can take down the entire system",
      },
      {
        id: 7,
        question: "Why might you shard a database?",
        options: [
          "To increase latency",
          "To split data across multiple machines for scalability",
          "To avoid backups",
          "To remove indexes",
        ],
        correctAnswer: "To split data across multiple machines for scalability",
      },
      {
        id: 8,
        question: "What is eventual consistency?",
        options: [
          "Data is always consistent immediately",
          "The system may temporarily return stale data but converges to consistency over time",
          "Data is never consistent",
          "Only SQL databases support it",
        ],
        correctAnswer: "The system may temporarily return stale data but converges to consistency over time",
      },
      {
        id: 9,
        question: "Why use a CDN for static assets?",
        options: [
          "To move compute closer to the user for dynamic DB queries",
          "To serve static content from edge locations, reducing latency",
          "To replace TLS",
          "To store passwords",
        ],
        correctAnswer: "To serve static content from edge locations, reducing latency",
      },
      {
        id: 10,
        question: "What is a key benefit of stateless services?",
        options: [
          "They require sticky sessions",
          "They are easier to scale horizontally behind a load balancer",
          "They cannot use caching",
          "They only work on-premise",
        ],
        correctAnswer: "They are easier to scale horizontally behind a load balancer",
      },
      {
        id: 11,
        question: "Which choice reduces the blast radius of failures?",
        options: ["One giant monolith always", "Circuit breakers and timeouts", "No monitoring", "Disable retries everywhere"],
        correctAnswer: "Circuit breakers and timeouts",
      },
      {
        id: 12,
        question: "What is an example of an idempotent operation?",
        options: [
          "POST creating a new record each time",
          "GET fetching a resource",
          "Appending to a list without checks",
          "Incrementing a counter",
        ],
        correctAnswer: "GET fetching a resource",
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
      {
        id: 5,
        question: "A strong example for “Tell me about yourself” should be:",
        options: [
          "Your entire life story",
          "A concise narrative aligned to the role: past → present → why this job",
          "Only your hobbies",
          "Only your GPA",
        ],
        correctAnswer: "A concise narrative aligned to the role: past → present → why this job",
      },
      {
        id: 6,
        question: "When asked about a failure, the best approach is to:",
        options: [
          "Deny any failures",
          "Share a real example, take ownership, and highlight what you changed/learned",
          "Blame teammates",
          "Keep it extremely vague",
        ],
        correctAnswer: "Share a real example, take ownership, and highlight what you changed/learned",
      },
      {
        id: 7,
        question: "A good way to show impact in behavioral answers is to:",
        options: [
          "Use buzzwords only",
          "Mention measurable outcomes (time saved, revenue, users, reliability) when possible",
          "Avoid numbers entirely",
          "Focus only on tools used",
        ],
        correctAnswer: "Mention measurable outcomes (time saved, revenue, users, reliability) when possible",
      },
      {
        id: 8,
        question: "When you don’t know an answer, a good response is to:",
        options: [
          "Make up details confidently",
          "Clarify assumptions, explain your approach, and propose next steps",
          "Immediately change the topic",
          "Stay silent",
        ],
        correctAnswer: "Clarify assumptions, explain your approach, and propose next steps",
      },
      {
        id: 9,
        question: "What’s a good way to handle interruptions in an interview?",
        options: [
          "Argue to continue",
          "Pause, acknowledge, and continue concisely or ask if you should adjust",
          "Ignore them",
          "End the interview",
        ],
        correctAnswer: "Pause, acknowledge, and continue concisely or ask if you should adjust",
      },
      {
        id: 10,
        question: "Which is a strong structure for answering 'Why this company?'",
        options: [
          "Only salary and benefits",
          "Company mission + product + team/role fit + your growth goals",
          "Only the location",
          "Only that it's 'a great company'",
        ],
        correctAnswer: "Company mission + product + team/role fit + your growth goals",
      },
      {
        id: 11,
        question: "When describing leadership without a title, emphasize:",
        options: [
          "Only that you were the loudest",
          "Influence through communication, initiative, and ownership",
          "Only that you worked alone",
          "Only that you managed people",
        ],
        correctAnswer: "Influence through communication, initiative, and ownership",
      },
      {
        id: 12,
        question: "A good follow-up question to ask an interviewer is:",
        options: [
          "“Do you like me?”",
          "“What does success look like in the first 90 days for this role?”",
          "“Can I leave early?”",
          "“How soon can I be CEO?”",
        ],
        correctAnswer: "“What does success look like in the first 90 days for this role?”",
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
      {
        id: 5,
        question: "Which action commonly reduces JavaScript bundle size?",
        options: ["Add more dependencies", "Tree-shaking and removing unused code", "Inline all images as base64", "Disable caching"],
        correctAnswer: "Tree-shaking and removing unused code",
      },
      {
        id: 6,
        question: "Why is lazy loading images useful?",
        options: ["It increases bandwidth usage", "It defers loading offscreen images to reduce initial load", "It breaks SEO always", "It disables caching"],
        correctAnswer: "It defers loading offscreen images to reduce initial load",
      },
      {
        id: 7,
        question: "What does memoization (useMemo/useCallback) primarily help with?",
        options: ["Changing HTML semantics", "Avoiding repeated work or stable references between renders", "Making CSS faster automatically", "Replacing state"],
        correctAnswer: "Avoiding repeated work or stable references between renders",
      },
      {
        id: 8,
        question: "Which practice improves runtime performance in lists?",
        options: ["Render thousands of items always", "Virtualization/windowing", "Disable keys", "Use random keys"],
        correctAnswer: "Virtualization/windowing",
      },
      {
        id: 9,
        question: "What is a common cause of slow pages on mobile?",
        options: ["Too many optimized images", "Large JS bundles and main-thread work", "Using semantic HTML", "Using caching"],
        correctAnswer: "Large JS bundles and main-thread work",
      },
      {
        id: 10,
        question: "What does 'debouncing' help with?",
        options: ["Making API calls more frequent", "Reducing how often a function runs during rapid events (e.g., typing)", "Increasing re-renders", "Disabling user input"],
        correctAnswer: "Reducing how often a function runs during rapid events (e.g., typing)",
      },
      {
        id: 11,
        question: "Which technique improves perceived navigation performance between routes?",
        options: ["No prefetching", "Prefetching route bundles/resources when likely needed", "Blocking rendering until everything loads", "Disable browser cache"],
        correctAnswer: "Prefetching route bundles/resources when likely needed",
      },
      {
        id: 12,
        question: "What is the goal of minimizing 'layout shift'?",
        options: ["To make animations slower", "To keep elements from jumping around during load, improving UX", "To increase CSS specificity", "To disable responsiveness"],
        correctAnswer: "To keep elements from jumping around during load, improving UX",
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
      {
        id: 5,
        question: "A common cause of 'Cannot read properties of undefined' is:",
        options: [
          "Using too many CSS variables",
          "Accessing nested properties without checking existence (optional chaining helps)",
          "Using semantic HTML",
          "Using too many badges",
        ],
        correctAnswer: "Accessing nested properties without checking existence (optional chaining helps)",
      },
      {
        id: 6,
        question: "If a handler runs repeatedly in React, a common cause is:",
        options: [
          "Using a stable dependency array",
          "Missing dependencies in useEffect or creating new function deps each render",
          "Using useMemo",
          "Using alt attributes",
        ],
        correctAnswer: "Missing dependencies in useEffect or creating new function deps each render",
      },
      {
        id: 7,
        question: "When debugging CSS layout issues, a helpful tool is:",
        options: ["Console only", "DevTools Elements/Computed panel", "robots.txt", "package.json"],
        correctAnswer: "DevTools Elements/Computed panel",
      },
      {
        id: 8,
        question: "If a request returns 404, it usually means:",
        options: ["Server error", "Resource not found at that URL", "Unauthorized", "Too many requests"],
        correctAnswer: "Resource not found at that URL",
      },
      {
        id: 9,
        question: "A good way to quickly validate input/props assumptions is to:",
        options: ["Guess", "Add temporary logging or use debugger breakpoints", "Remove types", "Rewrite the component"],
        correctAnswer: "Add temporary logging or use debugger breakpoints",
      },
      {
        id: 10,
        question: "If a React list shows weird reorder behavior, check that:",
        options: [
          "Keys are stable and unique (not array index for changing lists)",
          "CSS border-radius is set",
          "You used <div> everywhere",
          "You used fetch instead of axios",
        ],
        correctAnswer: "Keys are stable and unique (not array index for changing lists)",
      },
      {
        id: 11,
        question: "If an effect causes an infinite loop, a common cause is:",
        options: [
          "Dependency array is empty",
          "Setting state in an effect that depends on that same state without guards",
          "Using memoization",
          "Using semantic HTML",
        ],
        correctAnswer: "Setting state in an effect that depends on that same state without guards",
      },
      {
        id: 12,
        question: "When tracking down a performance issue, a useful first step is to:",
        options: [
          "Disable all features",
          "Measure with profiling tools (React DevTools Profiler / browser Performance tab)",
          "Increase font size",
          "Remove all components",
        ],
        correctAnswer: "Measure with profiling tools (React DevTools Profiler / browser Performance tab)",
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
