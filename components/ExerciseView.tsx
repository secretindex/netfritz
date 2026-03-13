"use client";

import Image from "next/image";
import Metronome from "./Metronome";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const EXERCISES = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Exercício ${i + 1}`,
  image: `/fritz/exercise_${(i + 1).toString().padStart(3, "0")}.png`,
  finished: false,
}));

export default function ExerciseView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = EXERCISES[currentIndex];

  const [isFinished, setIsFinished] = useState(currentExercise.finished);

  useEffect(() => {
    setIsFinished(EXERCISES[currentIndex].finished);
  }, [currentIndex]);

  const toggleFinished = () => {
    const newValue = !isFinished;
    setIsFinished(newValue);
    EXERCISES[currentIndex].finished = newValue;
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < EXERCISES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-2/4">
      <div className="w-full flex flex-col justify-center gap-6 items-center max-w-full border border-gray-200 rounded-lg p-6 shadow-sm">
        {/* Cabeçalho com navegação */}
        <div className="w-full flex justify-between items-center px-2">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={currentIndex === 0}
            className={currentIndex === 0 ? "opacity-40" : ""}
          >
            Anterior
          </Button>

          <h2 className="text-xl font-semibold">
            {currentExercise.name}
            {currentExercise.finished && (
              <span className="ml-2 text-sm text-green-600">(concluído)</span>
            )}
          </h2>

          <Button
            variant="ghost"
            onClick={goNext}
            disabled={currentIndex === EXERCISES.length - 1}
            className={currentIndex === EXERCISES.length - 1 ? "opacity-40" : ""}
          >
            Próximo
          </Button>
        </div>

        {/* Imagem */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
          <Image
            src={currentExercise.image}
            alt={currentExercise.name}
            width={800}
            height={800}
            className="w-full h-auto object-contain max-h-[70vh]"
            priority={currentIndex <= 2} // carrega mais rápido os primeiros
          />
        </div>

        {/* Botão de concluir */}
        <Button
          onClick={toggleFinished}
          variant={isFinished ? "default" : "outline"}
          className={`w-full max-w-xs transition-colors ${
            isFinished
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {isFinished ? "Desmarcar como concluído" : "Marcar como concluído"}
        </Button>

        {/* Metronomo */}
        <div className="flex justify-center w-full mt-4 border-t pt-4">
          <Metronome />
        </div>
      </div>
    </div>
  );
}