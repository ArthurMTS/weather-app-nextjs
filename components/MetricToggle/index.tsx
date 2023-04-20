import React from "react";

interface MetricToggleProps {
  system: "metric" | "imperial";
  setSystem: (value: "metric" | "imperial") => void;
}

interface ToggleButtonProps extends MetricToggleProps {
  title: string;
  unit: "metric" | "imperial";
}

function ToggleButton({ title, system, setSystem, unit }: ToggleButtonProps) {
  return (
    <p
      className={`cursor-pointer font-mono text-sm text-dark sm:text-lg ${
        system === unit ? "text-amber-400 font-semibold" : ""
      }`}
      onClick={() => setSystem(unit)}
    >
      {title}
    </p>
  );
}

export function MetricToggle({ system, setSystem }: MetricToggleProps) {
  return (
    <div className="flex justify-between items-center bg-slate-100 rounded-xl p-2 my-4 shadow gap-3">
      <ToggleButton
        title="Metric System"
        unit="metric"
        system={system}
        setSystem={setSystem}
      />
      <ToggleButton
        title="Imperial System"
        unit="imperial"
        system={system}
        setSystem={setSystem}
      />
    </div>
  );
}
