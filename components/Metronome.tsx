"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  // create a metronome that plays a sound every second
  // use the Web Audio API to play a sound
  // use the useState hook to manage the state of the metronome
  // use the useEffect hook to play the sound

  useEffect(() => {
    if (isPlaying) {
      // play sound
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col items-center gap-4">
      <div>Timer</div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl font-bold">60</span>
        <span className="text-muted-foreground">BPM</span>
      </div>
      <div className="w-full">
        time signature
      </div>
      <div>
        <Button variant={isPlaying ? "destructive" : "default"} onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  )
}

export default Metronome