"use client";

import { useEffect, useState } from "react";
import { DatePicker } from "@/components/ui/DatePicker";
import { Button } from "@/components/ui/Button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetISODateTime: string): TimeLeft | null {
  const target = new Date(targetISODateTime).getTime();
  if (Number.isNaN(target)) return null;

  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function CountdownWidget() {
  const [targetDate, setTargetDate] = useState("");
  const [targetTime, setTargetTime] = useState("00:00");
  const [activeTarget, setActiveTarget] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeTarget) return;

    const tick = () => setTimeLeft(getTimeLeft(activeTarget));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [activeTarget]);

  function handleStart() {
    setError(null);

    if (!targetDate) {
      setError("Please select a target date.");
      return;
    }

    const combined = `${targetDate}T${targetTime || "00:00"}:00`;
    const parsed = getTimeLeft(combined);

    if (!parsed) {
      setError("Please enter a valid date and time.");
      return;
    }

    setActiveTarget(combined);
  }

  const isExpired =
    activeTarget &&
    timeLeft &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Target Date
          <DatePicker value={targetDate} onChange={setTargetDate} />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Target Time
          <input
            type="time"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <Button type="button" onClick={handleStart} className="mt-2 w-full sm:w-auto">
          Start Countdown
        </Button>
      </div>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {activeTarget && timeLeft && !error && (
        <div className="mt-8 border-t border-white/5 pt-6">
          {isExpired ? (
            <p className="text-center text-lg font-semibold text-brand-accent">
              🎉 The countdown has ended!
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-brand-bg p-4 text-center">
                  <p className="text-2xl font-bold text-brand-accent">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}