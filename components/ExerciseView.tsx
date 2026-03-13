import Image from "next/image";
import Metronome from "./Metronome";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const EXERCISES = [
  {
    id: 1,
    name: "Exercício 1",
    image: "/fritz/exercise_001.png",
    finished: false,
  },
  {
    id: 2,
    name: "Exercício 2",
    image: "/fritz/exercise_002.png",
    finished: false,
  },
  {
    id: 3,
    name: "Exercício 3",
    image: "/fritz/exercise_003.png",
    finished: false,
  },
  {
    id: 4,
    name: "Exercício 4",
    image: "/fritz/exercise_004.png",
    finished: false,
  },
  {
    id: 5,
    name: "Exercício 5",
    image: "/fritz/exercise_005.png",
    finished: false,
  },
  {
    id: 6,
    name: "Exercício 6",
    image: "/fritz/exercise_006.png",
    finished: false,
  },
  {
    id: 7,
    name: "Exercício 7",
    image: "/fritz/exercise_007.png",
    finished: false,
  },
  {
    id: 8,
    name: "Exercício 8",
    image: "/fritz/exercise_008.png",
    finished: false,
  },
  {
    id: 9,
    name: "Exercício 9",
    image: "/fritz/exercise_009.png",
    finished: false,
  },
  {
    id: 10,
    name: "Exercício 10",
    image: "/fritz/exercise_010.png",
    finished: false,
  },
];
const ExerciseView = () => {
  const [exercise, setExercise] = useState(EXERCISES[0]);
  const [exerciseNumber, setExerciseNumber] = useState(1);
  const [finished, setFinished] = useState(EXERCISES[exercise.id].finished);

  const finishExercise = () => {
    setFinished(!finished);
    EXERCISES[exercise.id].finished = finished;
  };

  const goBack = () => {
    if (exercise.id > 1) {
      setExerciseNumber(exerciseNumber - 1);
      setExercise(EXERCISES[exerciseNumber]);
    }
  };

  const goForward = () => {
    if (exercise.id < 10) {
      setExerciseNumber(exerciseNumber + 1);
      setExercise(EXERCISES[exerciseNumber]);
    }
  };

  useEffect(() => {
    setFinished(EXERCISES[exerciseNumber - 1].finished);
  }, [exerciseNumber]);

  return (
    <div className="flex justify-center items-center w-2/4">
      <div className="w-full flex flex-col justify-center gap-8 items-center max-w-full border border-gray-200 rounded-lg p-4">
        <div>
          <div className="flex justify-between items-center">
            <Button
              variant={"link"}
              className={exercise.id === 1 ? "opacity-50 cursor-not-allowed" : ""}
              onClick={goBack}
            >
              Anterior
            </Button>
            <h2 className="text-xl font-bold mb-4 text-center">
              {exercise.name}
            </h2>
            <Button variant={"link"} onClick={goForward}>
              Próximo
            </Button>
          </div>
          <Image
            src={`/fritz/exercise_${exercise.id.toString().padStart(3, "0")}.png`}
            alt={`${exercise.name}`}
            className="mx-auto shadow-md rounded-lg"
            width={800}
            height={800}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={finished ? "default" : "outline"} className={`w-full ${finished ? "bg-green-500 hover:bg-green-600" : ""}`} onClick={finishExercise}>
            {finished ? "Desmarcar como feito" : "Marcar como feito"}
          </Button>
        </div>
        <Metronome />
      </div>
    </div>
  );
};

export default ExerciseView;
