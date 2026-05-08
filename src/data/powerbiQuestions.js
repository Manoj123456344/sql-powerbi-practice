const powerBITopics = [
  "DAX",
  "CALCULATE",
  "FILTER",
  "ALL",
  "ALLSELECTED",
  "Time Intelligence",
  "Power Query",
  "Relationships",
  "Star Schema",
  "Snowflake Schema",
  "DirectQuery",
  "Import Mode",
  "Incremental Refresh",
  "Query Folding",
  "Bookmarks",
  "Drillthrough",
  "Row Level Security",
  "Dataflows",
  "Gateways",
  "Performance Optimization"
];

const powerBITemplates = [
  "Explain TOPIC.",
  "Real time scenario on TOPIC.",
  "Difference between TOPIC concepts.",
  "How to optimize TOPIC?",
  "Interview question on TOPIC.",
  "Advanced example for TOPIC.",
  "Best practices for TOPIC.",
  "Production issue related to TOPIC.",
  "How does TOPIC improve report performance?",
  "Write DAX using TOPIC.",
  "Common mistakes in TOPIC.",
  "Troubleshooting TOPIC issues.",
  "Scenario based question on TOPIC.",
  "How is TOPIC used in enterprise projects?",
  "Explain TOPIC with example."
];

export const powerBIQuestionsData = [];

let powerBICounter = 1;

powerBITopics.forEach((topic) => {

  powerBITemplates.forEach((template) => {

    powerBIQuestionsData.push({

      id: powerBICounter,

      question: template.replace("TOPIC", topic),

      difficulty:
        powerBICounter % 3 === 0
          ? "Hard"
          : powerBICounter % 2 === 0
          ? "Medium"
          : "Easy",

      topic,

      solution: `Sample explanation for ${topic}.`

    });

    powerBICounter++;

  });

});

while (powerBIQuestionsData.length < 300) {

  powerBIQuestionsData.push({

    id: powerBICounter,

    question: `Power BI Scenario Based Question ${powerBICounter}`,

    difficulty: "Medium",

    topic: "Scenario Based",

    solution: "Practice real time Power BI interview scenarios."

  });

  powerBICounter++;

}
