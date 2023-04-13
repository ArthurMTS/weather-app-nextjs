import React from "react";

import { useStorage } from "@/hooks/useStorage";

interface MetricContextInfo {
  metric: string[];
  toggleMetric: (metric: string[]) => void;
}

interface MetricProviderProps {
  children: React.ReactElement;
}

export const MetricContext = React.createContext({} as MetricContextInfo);

export function MetricProvider({ children }: MetricProviderProps) {
  const [metric, setMetric] = useStorage("metric", ["text-main", ""]);

  const toggleMetric = (metric: string[]) => {
    setMetric(metric);
  };

  return (
    <MetricContext.Provider value={{ metric, toggleMetric }}>
      {children}
    </MetricContext.Provider>
  );
}
