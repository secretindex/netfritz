"use client";

import { Button } from "@/components/ui/button";
import ExerciseView from "@/components/ExerciseView";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowTurnBackwardIcon } from "@hugeicons/core-free-icons";

const FritzBook1 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-between w-2/4">
        <Button variant="outline" size="icon" onClick={() => window.history.back()}>
          <HugeiconsIcon icon={ArrowTurnBackwardIcon} />
        </Button>
        <h1 className="text-3xl font-semibold flex-1 text-center">Fritz Kroepsch Book 1</h1>
      </div>
      <ExerciseView />
    </div>
  );
};

export default FritzBook1;
