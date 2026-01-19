/**
 * Mock tests data provided by the user attachment.
 * This dataset is used by MockTestsPage to render quizzes and compute basic scoring.
 */

// PUBLIC_INTERFACE
export const mockTests = [
  {
    id: 1,
    title: "Frontend Developer Test",
    skill: "React",
    totalQuestions: 5,
    duration: "10 mins",
    questions: [
      {
        id: 1,
        question: "What is JSX in React?",
        options: [
          "A JavaScript syntax extension",
          "A database",
          "A CSS framework",
          "A backend language"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which hook is used for state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "React is mainly used for?",
        options: [
          "Database management",
          "Backend development",
          "UI development",
          "Testing"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "What is Virtual DOM?",
        options: [
          "Real DOM",
          "Lightweight DOM copy",
          "Browser API",
          "Server DOM"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which company developed React?",
        options: ["Google", "Microsoft", "Facebook", "Amazon"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Backend Node.js Test",
    skill: "Node.js",
    totalQuestions: 5,
    duration: "12 mins",
    questions: [
      {
        id: 1,
        question: "Which built-in Node.js module is commonly used to create an HTTP server?",
        options: ["fs", "http", "path", "events"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In Node.js, what does the event loop primarily handle?",
        options: [
          "Compiling JavaScript to bytecode",
          "Managing asynchronous callbacks and I/O",
          "Encrypting network traffic",
          "Rendering HTML templates"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which statement about CommonJS is correct?",
        options: [
          "It uses import/export syntax by default",
          "It uses require() and module.exports",
          "It is only available in browsers",
          "It cannot load JSON files"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What is a common way to read environment variables in Node.js?",
        options: ["process.env", "window.env", "env.get()", "global.env()"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Which status code is typically used for a successful GET request?",
        options: ["201", "204", "200", "302"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Data Structures Test",
    skill: "DSA",
    totalQuestions: 5,
    duration: "15 mins",
    questions: [
      {
        id: 1,
        question: "Which data structure follows the LIFO principle?",
        options: ["Queue", "Stack", "Heap", "Graph"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the average time complexity of searching in a balanced binary search tree (BST)?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which data structure is best suited for BFS traversal?",
        options: ["Stack", "Queue", "Set", "Priority queue"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "In an array, what is the time complexity to access an element by index?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Which of the following is true about a hash table (ideal case)?",
        options: [
          "Insertion is always O(n)",
          "Search is always O(log n)",
          "Search is O(1) on average with a good hash function",
          "It cannot handle collisions"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "CSS/HTML Fundamentals Test",
    skill: "HTML & CSS",
    totalQuestions: 5,
    duration: "10 mins",
    questions: [
      {
        id: 1,
        question: "Which HTML element is the most appropriate for main page navigation links?",
        options: ["<section>", "<nav>", "<article>", "<footer>"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In CSS, which property controls the space between an element's border and its content?",
        options: ["margin", "padding", "gap", "outline"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which CSS layout system is best suited for one-dimensional layouts (row OR column)?",
        options: ["Flexbox", "Grid", "Float", "Table"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What does the CSS selector .card > p target?",
        options: [
          "All <p> elements anywhere inside .card",
          "Only direct child <p> elements of .card",
          "All elements with class p inside .card",
          "The first <p> following .card"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which attribute improves accessibility by providing alternate text for images?",
        options: ["title", "alt", "src", "role"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "JavaScript Fundamentals Test",
    skill: "JavaScript",
    totalQuestions: 5,
    duration: "12 mins",
    questions: [
      {
        id: 1,
        question: "What is the result of typeof null in JavaScript?",
        options: ['"null"', '"object"', '"undefined"', '"number"'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which of the following creates a new array with elements that pass a test?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does '===' do in JavaScript?",
        options: [
          "Compares values after type coercion",
          "Compares values and types without type coercion",
          "Assigns a value",
          "Checks if a variable is defined"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which statement about 'let' is correct?",
        options: [
          "It is function-scoped",
          "It is block-scoped",
          "It can only be used in loops",
          "It must be initialized"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "String.toObject()"],
        correctAnswer: 1
      }
    ]
  }
];
