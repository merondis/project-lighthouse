"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

function formatTime(ms: number): string {
  const totalMs = Math.max(0, ms);
  const hours = Math.floor(totalMs / 3600000);
  const minutes = Math.floor((totalMs % 3600000) / 60000);
  const seconds = Math.floor((totalMs % 60000) / 1000);
  const centiseconds = Math.floor((totalMs % 1000) / 10);

  const pad = (n: number, len = 2) => String(n).padStart(len, "0");

  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`
    : `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

export function StopwatchWidget() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    function tick() {
      if (startTimeRef.current !== null) {
        setElapsedMs(Date.now() - startTimeRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isRunning]);

  function handleStart() {
    startTimeRef.current = Date.now() - elapsedMs;
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedMs(0);
    setLaps([]);
    startTimeRef.current = null;
  }

  function handleLap() {
    if (!isRunning) return;
    setLaps((prev) => [elapsedMs, ...prev]);
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6">
        <p className="font-mono text-5xl font-bold tabular-nums text-white sm:text-6xl">
          {formatTime(elapsedMs)}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {!isRunning ? (
            <Button type="button" onClick={handleStart}>
              {elapsedMs > 0 ? "Resume" : "Start"}
            </Button>
          ) : (
            <Button type="button" onClick={handlePause}>
              Pause
            </Button>
          )}
          <Button type="button" onClick={handleLap} disabled={!isRunning} variant="secondary">
            Lap
          </Button>
          <Button type="button" onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>

        {laps.length > 0 && (
          <div className="w-full border-t border-white/5 pt-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-secondary">Laps</h3>
            <ul className="flex max-h-64 flex-col gap-2 overflow-y-auto">
              {laps.map((lap, index) => {
                const lapNumber = laps.length - index;
                const previousLap = laps[index + 1] ?? 0;
                const splitMs = lap - previousLap;
                return (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-brand-bg px-4 py-2 font-mono text-sm text-white"
                  >
                    <span className="text-brand-secondary">Lap {lapNumber}</span>
                    <span>{formatTime(splitMs)}</span>
                    <span className="text-brand-secondary">{formatTime(lap)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
