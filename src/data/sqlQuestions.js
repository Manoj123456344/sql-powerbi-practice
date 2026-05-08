const sqlTopics = [
  "Joins",
  "CTE",
  "Subquery",
  "Window Functions",
  "Indexes",
  "Normalization",
  "Transactions",
  "Views",
  "Stored Procedures",
  "Triggers",
  "Aggregation",
  "Constraints",
  "Keys",
  "Performance",
  "Warehousing",
  "Partitioning",
  "Functions",
  "Case Statements",
  "Ranking Functions",
  "Scenario Based"
];

const sqlTemplates = [
  "Explain TOPIC.",
  "Difference between TOPIC concepts.",
  "Real time scenario on TOPIC.",
  "Write SQL query using TOPIC.",
  "Performance optimization using TOPIC.",
  "Interview question on TOPIC.",
  "Advanced example for TOPIC.",
  "Find duplicate records using TOPIC.",
  "How does TOPIC improve performance?",
  "Advantages and disadvantages of TOPIC.",
  "Best practices for TOPIC.",
  "How to troubleshoot TOPIC issues?",
  "Production scenario for TOPIC.",
  "What are common mistakes in TOPIC?",
  "Explain TOPIC with example."
];

export const sqlQuestionsData = [];

let sqlCounter = 1;

sqlTopics.forEach((topic) => {

  sqlTemplates.forEach((template) => {

    sqlQuestionsData.push({

      id: sqlCounter,

      question: template.replace("TOPIC", topic),

      difficulty:
        sqlCounter % 3 === 0
          ? "Hard"
          : sqlCounter % 2 === 0
          ? "Medium"
          : "Easy",

      topic,

      solution: `Sample explanation for ${topic}.`

    });

    sqlCounter++;

  });

});

while (sqlQuestionsData.length < 300) {

  sqlQuestionsData.push({

    id: sqlCounter,

    question: `SQL Scenario Based Question ${sqlCounter}`,

    difficulty: "Medium",

    topic: "Scenario Based",

    solution: "Practice real time SQL interview scenarios."

  });

  sqlCounter++;

}
