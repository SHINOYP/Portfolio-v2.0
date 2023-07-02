import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }
    return () => clearInterval(interval);
  }, [currentIndex, speed, text]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;
