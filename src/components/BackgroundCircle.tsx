"use client";

import { useEffect, useState } from "react";

interface BackgroundCircleProps {
  radius: number | string;
  position: { top: string; left: string };
  color: string;
  opacity?: number;
  blur?: number;
}

const BackgroundCircle: React.FC<BackgroundCircleProps> = ({
  radius,
  position,
  color,
  opacity = 1,
  blur = 8,
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // Update screenWidth on mount and resize
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth(); // Initial update

    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const calculateRadius = () => {
    if (typeof radius === "number") {
      return `${radius}px`;
    } else if (typeof radius === "string" && radius.includes("%")) {
      const percentage = parseInt(radius.replace("%", ""), 10);
      return `${(percentage / 100) * screenWidth}px`;
    } else {
      return "0";
    }
  };

  const radiusStyle = calculateRadius();

  return (
    <div
      className="absolute z-0"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          width: radiusStyle,
          height: radiusStyle,
          borderRadius: "50%",
          backgroundColor: color,
          filter: `blur(${blur}px)`,
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default BackgroundCircle;
