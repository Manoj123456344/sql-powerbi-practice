import { useEffect, useState } from "react";

export default function SQLPowerBIPracticePlatform() {

  const [currentUser, setCurrentUser] = useState("Manoj");

  const [userData, setUserData] = useState({
    Manoj: {
      solved: [],
      answers: {}
    },
    Almas: {
      solved: [],
      answers: {}
    }
  });

  const allSqlQuestions = [
    {
      question: "Find the 2nd highest salary from Employee table.",
      difficulty: "Medium",
      topic: "Subquery",
      solution:
        "SELECT MAX(salary) FROM employee WHERE salary < (SELECT MAX(salary) FROM employee)"
    },
    {
      question: "Difference between ROW_NUMBER and RANK?",
      difficulty: "Easy",
      topic: "Window Functions",
      solution:
        "ROW_NUMBER gives unique numbers. RANK gives same rank for duplicates."
    },
    {
      question: "Write query to remove duplicate rows.",
      difficulty: "Medium",
      topic: "CTE",
      solution:
        "Use ROW_NUMBER with CTE and delete duplicates."
    },
    {
      question: "Difference between WHERE and HAVING?",
      difficulty: "Easy",
      topic: "Filtering",
      solution:
        "WHERE filters before aggregation. HAVING filters after aggregation."
    },
    {
      question: "Explain INNER JOIN with example.",
      difficulty: "Easy",
      topic: "Joins",
      solution:
        "INNER JOIN returns matching rows from both tables."
    }
  ];

  const allDaxQuestions = [
    {
      question: "Difference between Measure and Calculated Column?",
      difficulty: "Easy",
      topic: "DAX",
      solution:
        "Measure calculates dynamically. Calculated column stores values physically."
    },
    {
      question: "Create Running Total measure in Power BI.",
      difficulty: "Medium",
      topic: "Time Intelligence",
      solution:
        "Use CALCULATE and FILTER functions."
    },
    {
      question: "Explain Star Schema in Power BI.",
      difficulty: "Easy",
      topic: "Data Modeling",
      solution:
        "Fact table connected with dimension tables."
    },
    {
      question: "Difference between Import and DirectQuery?",
      difficulty: "Medium",
      topic: "Storage Mode",
      solution:
        "Import stores data. DirectQuery fetches live data."
    },
    {
      question: "Explain CALCULATE function in DAX.",
      difficulty: "Hard",
      topic: "DAX",
      solution:
        "CALCULATE changes filter context."
    }
  ];

  const getDailyQuestions = (questions) => {

    const now = new Date();

    const adjustedDate = new Date(
      now.getTime() - 9 * 60 * 60 * 1000
    );

    const day = adjustedDate.getDate();

    return [
      questions[day % questions.length],
      questions[(day + 1) % questions.length],
      questions[(day + 2) % questions.length],
      questions[(day + 3) % questions.length],
      questions[(day + 4) % questions.length]
    ];
  };

  const sqlQuestions = getDailyQuestions(allSqlQuestions);
  const daxQuestions = getDailyQuestions(allDaxQuestions);

  useEffect(() => {

    const savedData =
      JSON.parse(localStorage.getItem("practicePlatformData"));

    if (savedData) {
      setUserData(savedData);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "practicePlatformData",
      JSON.stringify(userData)
    );

  }, [userData]);

  const saveAnswer = (question, answer) => {

    setUserData((prev) => {

      return {

        ...prev,

        [currentUser]: {

          ...prev[currentUser],

          answers: {

            ...prev[currentUser].answers,

            [question]: answer

          }

        }

      };

    });

  };

  const submitAnswer = (item) => {

    const answer =
      userData[currentUser].answers[item.question] || "";

    const firstWord =
      item.solution
        .toLowerCase()
        .split(" ")[0];

    if (
      answer.toLowerCase().includes(firstWord)
    ) {

      if (
        !userData[currentUser].solved.includes(item.question)
      ) {

        setUserData((prev) => ({

          ...prev,

          [currentUser]: {

            ...prev[currentUser],

            solved: [
              ...prev[currentUser].solved,
              item.question
            ]

          }

        }));

      }

      alert("Correct Answer ✅");

    } else {

      alert("Answer submitted successfully ✅");

    }

  };

  const solvedQuestions =
    userData[currentUser].solved.length;

  const solvedSQL = sqlQuestions.filter((q) =>
    userData[currentUser].solved.includes(q.question)
  ).length;

  const solvedPowerBI = daxQuestions.filter((q) =>
    userData[currentUser].solved.includes(q.question)
  ).length;

  const sqlPercentage = Math.round(
    (solvedSQL / sqlQuestions.length) * 100
  );

  const powerBIPercentage = Math.round(
    (solvedPowerBI / daxQuestions.length) * 100
  );

  const streak = solvedQuestions;

  const today = new Date().toDateString();

  const QuestionCard = ({ item, color }) => {

    const isSolved =
      userData[currentUser].solved.includes(item.question);

    const answerValue =
      userData[currentUser].answers[item.question] || "";

    return (

      <div className="border border-gray-200 rounded-3xl p-4 md:p-6 bg-white shadow-sm">

        <div className="flex flex-wrap gap-2 mb-4">

          <span className={`${color} px-3 py-1 rounded-full text-sm`}>
            {item.topic}
          </span>

          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
            {item.difficulty}
          </span>

        </div>

        <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
          {item.question}
        </h3>

        <textarea
          placeholder="Write your answer here..."
          defaultValue={answerValue}
          onBlur={(e) =>
            saveAnswer(
              item.question,
              e.target.value
            )
          }
          className="w-full border border-gray-300 rounded-2xl p-4 mt-5 min-h-[150px] outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex flex-wrap gap-3 mt-5">

          <button
            onClick={() => submitAnswer(item)}
            className={`px-5 py-3 rounded-2xl text-white font-medium ${
              isSolved
                ? "bg-green-600"
                : "bg-black"
            }`}
          >
            {isSolved
              ? "Solved ✅"
              : "Submit Answer"}
          </button>

          <button
            onClick={() =>
              alert(item.solution)
            }
            className="border border-gray-300 px-5 py-3 rounded-2xl"
          >
            View Solution
          </button>

        </div>

      </div>
    );
  };

  return (

    <div className="min-h-screen bg-gray-100 p-3 md:p-6">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                SQL & Power BI Practice Hub
              </h1>

              <p className="text-gray-500 mt-3 text-base md:text-lg">
                Daily practice platform for interview preparation
              </p>

            </div>

            <div className="bg-gray-100 px-5 py-4 rounded-3xl">

              <p className="font-semibold mb-2">
                Current User
              </p>

              <select
                value={currentUser}
                onChange={(e) =>
                  setCurrentUser(e.target.value)
                }
                className="border border-gray-300 rounded-xl px-4 py-2 w-full"
              >
                <option>Manoj</option>
                <option>Almas</option>
              </select>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white p-5 rounded-3xl shadow-md">
            <h2 className="text-gray-500 text-sm">
              Questions Solved
            </h2>

            <p className="text-3xl font-bold mt-2">
              {solvedQuestions}
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-md">
            <h2 className="text-gray-500 text-sm">
              SQL Score
            </h2>

            <p className="text-3xl font-bold mt-2 text-blue-600">
              {sqlPercentage}%
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-md">
            <h2 className="text-gray-500 text-sm">
              Power BI Score
            </h2>

            <p className="text-3xl font-bold mt-2 text-green-600">
              {powerBIPercentage}%
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-md">
            <h2 className="text-gray-500 text-sm">
              Daily Streak
            </h2>

            <p className="text-3xl font-bold mt-2 text-orange-500">
              {streak} 🔥
            </p>
          </div>

        </div>

        {/* SQL Questions */}
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Today's SQL Questions
          </h2>

          <div className="space-y-5">

            {sqlQuestions.map((item, index) => (
              <QuestionCard
                key={index}
                item={item}
                color="bg-blue-100 text-blue-700"
              />
            ))}

          </div>

        </div>

        {/* Power BI Questions */}
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Today's Power BI Questions
          </h2>

          <div className="space-y-5">

            {daxQuestions.map((item, index) => (
              <QuestionCard
                key={index}
                item={item}
                color="bg-green-100 text-green-700"
              />
            ))}

          </div>

        </div>

        {/* Progress */}
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

          <h2 className="text-2xl font-bold mb-6">
            Practice Progress
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between border-b pb-4">

              <h3 className="font-semibold text-lg">
                Manoj
              </h3>

              <div className="text-xl font-bold">
                {userData.Manoj.solved.length} Solved
              </div>

            </div>

            <div className="flex items-center justify-between border-b pb-4">

              <h3 className="font-semibold text-lg">
                Almas
              </h3>

              <div className="text-xl font-bold">
                {userData.Almas.solved.length} Solved
              </div>

            </div>

          </div>

        </div>

        {/* Solved Questions History */}
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

          <h2 className="text-2xl font-bold mb-6">
            Solved Questions History
          </h2>

          {userData[currentUser].solved.length === 0 ? (

            <p className="text-gray-500">
              No solved questions yet.
            </p>

          ) : (

            <div className="space-y-4">

              {userData[currentUser].solved.map((question, index) => (

                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-4 bg-gray-50"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="font-semibold text-gray-800">
                        {question}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Solved by {currentUser}
                      </p>

                    </div>

                    <div className="text-green-600 font-bold">
                      ✅
                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 py-6 text-sm md:text-base">

          Built for SQL & Power BI Interview Preparation 🚀

          <br />

          Questions refresh daily at 9 AM

          <br />

          Today's Date: {today}

        </div>

      </div>

    </div>
  );
}