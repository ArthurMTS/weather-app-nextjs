import { CityContext } from "@/contexts/city";
import React from "react";

interface ToggleButtonProps {
  title: string;
  unit: "metric" | "imperial";
}

function ToggleButton({ title, unit }: ToggleButtonProps) {
  const { system, setSystem } = React.useContext(CityContext);

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

export function MetricToggle() {
  return (
    <div className="flex justify-between items-center bg-slate-100 rounded-xl p-2 my-4 shadow gap-3">
      <ToggleButton title="Metric System" unit="metric" />
      <ToggleButton title="Imperial System" unit="imperial" />
    </div>
  );
}
