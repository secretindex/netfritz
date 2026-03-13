"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Timer01Icon } from "@hugeicons/core-free-icons"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [beatCount, setBeatCount] = useState<number>(4)
  const [bpm, setBpm] = useState<number>(60)

  useEffect(() => {
      if (!isPlaying) return

  const audioCtx = new AudioContext()
  let nextBeatTime = audioCtx.currentTime
  let timerId: ReturnType<typeof setTimeout>

  fetch("/metronome/Metronome Sound.mp3")
    .then(res => res.arrayBuffer())
    .then(buf => audioCtx.decodeAudioData(buf))
    .then(decodedBuffer => {

      function scheduleBeat() {
        const source = audioCtx.createBufferSource()
        source.buffer = decodedBuffer
        source.connect(audioCtx.destination)
        source.start(nextBeatTime)
        nextBeatTime += 60 / bpm
      }

      function tick() {
        while (nextBeatTime < audioCtx.currentTime + 0.1) {
          scheduleBeat()
        }
        timerId = setTimeout(tick, 25)
      }

      tick()
    })

  return () => {
    clearTimeout(timerId)
    audioCtx.close()
  }
  }, [isPlaying, bpm])

  return (
    <div className="flex flex-col items-center gap-4 w-2/5">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-md font-light">
          Metronomo Simplificado
        </span>
        <HugeiconsIcon size={"16px"} icon={Timer01Icon} />
      </div>
      <div className="flex flex-col items-baseline gap-2 w-full">
        <div className="flex items-center gap-2 w-full justify-between">
          <Button variant={"ghost"} onClick={() => setBpm(bpm - 1)}>-</Button>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold" contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => setBpm(parseInt(e.target.textContent || "60"))}>{bpm}</span>
            <span className="text-md text-muted-foreground">BPM</span>
          </div>
          <Button variant={"ghost"} onClick={() => setBpm(bpm + 1)}>+</Button>
        </div>
        <div className="w-full">
          <Slider 
            min={40}
            max={240}
            step={1}
            value={[bpm]}
            onValueChange={(value) => setBpm(value[0])}
          />
        </div>
      </div>
      <div className="w-full">
        <Button variant={isPlaying ? "destructive" : "default"} className="w-full" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  )
}

export default Metronome