import React from "react";

interface MetricToggleProps {
  system: "metric" | "imperial";
  setSystem: (value: "metric" | "imperial") => void;
}

export function MetricToggle({ system, setSystem }: MetricToggleProps) {
  return (
    <div className="flex justify-between items-center bg-whiter rounded-xl p-2 my-4 shadow gap-3">
      <p
        className={`cursor-pointer text-base text-dark ${
          system === "metric" ? "text-main" : ""
        }`}
        onClick={() => setSystem("metric")}
      >
        Metric System
      </p>
      <p
        className={`cursor-pointer text-base text-dark ${
          system === "imperial" ? "text-main" : ""
        }`}
        onClick={() => setSystem("imperial")}
      >
        Imperial System
      </p>
    </div>
  );
}
