import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ProgressIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const windowHeight =
        "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop =
        "pageYOffset" in window ? window.pageYOffset : document.documentElement.scrollTop;
      const trackLength = docHeight - windowHeight;
      const pctScrolled = Math.floor((scrollTop / trackLength) * 100);
      setScrollPercentage(pctScrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPercentage >= 1 && scrollPercentage < 3) {
      setMessage("Start scrolling and reading!");
    } else if (scrollPercentage >= 3 && scrollPercentage < 5) {
      setMessage("Tired of Reading? Listen instead!");
    } else if (scrollPercentage >= 5 && scrollPercentage < 25) {
      setMessage("Get to the bottom and take the Cayenne Quiz!");
    } else if (scrollPercentage === 50) {
      setMessage("You are halfway done! Keep scrolling!");
    } else if (scrollPercentage > 50 && scrollPercentage < 75) {
      setMessage("You are almost ready to take the Cayenne Quiz for free swag!");
    } else if (scrollPercentage >= 100 && !showConfetti) {
      setMessage("Woo, you completed the course!");
      setShowConfetti(true);
    } else {
      setMessage("");
    }
  }, [scrollPercentage, showConfetti]);

  return (
    <div>
      <div className="fixed bottom-0 w-full h-full">{showConfetti && <Confetti />}</div>
      <div className="fixed bottom-0 w-full h-4 bg-[#155A63] z-50">
        <div
          className={`h-full ${scrollPercentage >= 100 ? "bg-green-500" : "bg-blue-500"}`}
          style={{ width: `${scrollPercentage}%` }}
        >
          <span className="text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Your Progress: {scrollPercentage}%
          </span>
        </div>
      </div>
      <div className="fixed bottom-12 right-4 flex items-center">
        {message && (
          <div className="bg-gray-200 py-2 px-4 rounded-lg">
            {message}
          </div>
        )}
        <img
          src="/cayenne.png"
          alt="Cayenne"
          className="w-16 h-16 ml-2"
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;
