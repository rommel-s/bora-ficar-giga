"use client";
import { useState, useEffect } from "react";

import { IoMdRefresh } from "react-icons/io";

import "./styles.css";

const TimerCountdown = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleToggleTimer = () => {
    if (timeLeft > 0) {
      setIsActive(!isActive);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(duration);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className={isActive ? "timer-container timer-running" : "timer-container"}
    >
      {/* Clicar nos números inicia ou pausa o timer */}
      <button
        className={isActive ? "timer-button animar" : "timer-button"}
        onClick={handleToggleTimer}
      >
        {minutes}:{seconds.toString().padStart(2, "0")}
      </button>

      <div>
        <button
          className={isActive ? "reload-button" : "reload-button btn-ready"}
          onClick={handleReset}
        >
          <IoMdRefresh size={30} />
        </button>
      </div>
    </div>
  );
};

export default TimerCountdown;
