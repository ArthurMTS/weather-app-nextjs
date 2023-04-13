import React from "react";

import { MetricContext } from "@/contexts/metric";

export function MetricToggle() {
  const { metric, toggleMetric } = React.useContext(MetricContext);

  return (
    <div className="flex justify-between items-center bg-whiter rounded-xl p-2 my-4 shadow gap-3">
      <p
        className={`cursor-pointer text-lg text-dark ${metric[0]}`}
        onClick={() => toggleMetric(["text-main", ""])}
      >
        Metric System
      </p>
      <p
        className={`cursor-pointer text-lg text-dark ${metric[1]}`}
        onClick={() => toggleMetric(["", "text-main"])}
      >
        Imperial System
      </p>
    </div>
  );
}
