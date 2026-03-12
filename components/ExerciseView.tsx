import Image from "next/image";
import Metronome from "./Metronome";
import { Button } from "./ui/button";
import { useState } from "react";

const ExerciseView = () => {
  const [exercise, setExercise] = useState(1);
  const goBack = () => {
    if (exercise > 1) {
      setExercise(exercise - 1);
    }
  };
  const goForward = () => {
    if (exercise < 10) {
      setExercise(exercise + 1);
    }
  };
  return (
    <div className="flex justify-center items-center w-2/4">
      <div className="w-full flex flex-col justify-center gap-8 items-center max-w-full border border-gray-200 rounded-lg p-4">
        <div>
          <div className="flex justify-between items-center">
            <Button
              variant={"link"}
              className={exercise === 1 ? "opacity-50 cursor-not-allowed" : ""}
              onClick={goBack}
            >
              Anterior
            </Button>
            <h2 className="text-xl font-bold mb-4 text-center">
              Exercise {exercise}
            </h2>
            <Button variant={"link"} onClick={goForward}>
              Próximo
            </Button>
          </div>
          <Image
            src={`/fritz/exercise_${exercise.toString().padStart(3, "0")}.png`}
            alt={`Exercise ${exercise}`}
            className="mx-auto shadow-md rounded-lg"
            width={800}
            height={800}
          />
        </div>
        <Metronome />
      </div>
    </div>
  );
};

export default ExerciseView;
