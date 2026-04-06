import { cn } from "@/lib/utils";
import { useState } from "react";

export const RealisticFogBackground = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg bg-surface/50 border border-border")}>
      <h1 className="text-2xl font-bold mb-2">Component Example</h1>
      <h2 className="text-xl font-semibold">{count}</h2>
      <div className="flex gap-2">
        <button 
          className="px-4 py-2 bg-amber/20 hover:bg-amber/40 rounded-md transition-colors"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button 
          className="px-4 py-2 bg-amber/20 hover:bg-amber/40 rounded-md transition-colors"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
