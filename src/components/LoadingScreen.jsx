
import React, { useState, useEffect } from 'react';


const LoadingScreen = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <div className="loading-percentage">
        Loading... {loadingPercentage}%
      </div>
    </div>
  );
};

export default LoadingScreen;
