import { useEffect, useState } from "react";

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  if (quiz.length === 0) {
    return null;
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
        setDisableNext(false);
        if (alertType === "success") {
          if (currentQuestion + 1 === quiz.length) {
            setGameFinished(true);
            return;
          }
          nextQuestion();
        }
      }, 2000);
    }
  }, [showAlert]);

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitQuiz = () => {
    setShowAlert(false);
    setDisableNext(true);
    if (selectedAnswer === null) {
      setAlertMessage("Please select an answer");
      setAlertType("error");
      setShowAlert(true);

      return;
    }

    if (!quiz[currentQuestion].Answers[selectedAnswer].Correct) {
      setAlertMessage("Incorrect answer");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    setAlertMessage("Correct answer");
    setAlertType("success");
    setShowAlert(true);

    if (currentQuestion + 1 === quiz.length) {
      return;
    }
  };

  const renderQuiz = () => {
    return (
      <>
        <div
          className={
            "text-white text-center transition-[padding] duration-500 ease absolute top-0 left-0 w-full h-0 overflow-hidden rounded-tl-xl rounded-tr-xl " +
            (showAlert && "h-auto py-5") +
            " " +
            (alertType === "error" ? "bg-red-500" : "") +
            " " +
            (alertType === "success" ? "bg-green-500" : "")
          }
        >
          {alertMessage}
        </div>
        <div className="">
          <span className="text-gray-300 text-2xl">
            Question {currentQuestion + 1}
          </span>
          <span className="text-gray-500">/{quiz.length}</span>
        </div>
        <hr className="my-3" />
        <div className="text-white my-5 text-2xl">
          {quiz[currentQuestion].Question}
        </div>
        <ul className="grid grid-cols-2 gap-5 mb-7 mt-15">
          {quiz[currentQuestion].Answers.map((answer, index) => (
            <li
              key={index}
              className={
                "text-white py-3 px-4 border-2 border-blue-500 rounded-full hover:bg-blue-500 cursor-pointer flex justify-between items-center" +
                (selectedAnswer === index ? " bg-blue-500" : "")
              }
              onClick={() => setSelectedAnswer(index)}
            >
              {answer.Answer}{" "}
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-c1sh5i"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                fill="white"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
              </svg>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            className="bg-white text-[#155A63] px-5 py-2 rounded-full"
            onClick={submitQuiz}
            disabled={disableNext}
          >
            Submit
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#155A63] p-6 relative z-50 rounded-xl">
      {gameFinished && (
        <div className="text-white text-center my-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Congratulations!
          </h1>
          <p>You have completed the quiz</p>
        </div>
      )}
      {!gameFinished && renderQuiz()}
    </div>
  );
};

export default Quiz;
