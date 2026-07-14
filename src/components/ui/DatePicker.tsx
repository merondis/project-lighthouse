"use client";

import { useEffect, useRef, useState } from "react";

interface DatePickerProps {
  value: string; // YYYY-MM-DD
  onChange: (value: string) => void;
  placeholder?: string;
  min?: string;
  max?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseISODate(value: string): Date | null {
  if (!value) return null;
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
  const [year, month, day] = parts;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_RANGE_START = CURRENT_YEAR - 120;
const YEAR_RANGE_END = CURRENT_YEAR + 20;
const YEAR_OPTIONS = Array.from(
  { length: YEAR_RANGE_END - YEAR_RANGE_START + 1 },
  (_, i) => YEAR_RANGE_END - i
);

export function DatePicker({ value, onChange, placeholder, min, max }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState<Date>(() => parseISODate(value) ?? new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parsed = parseISODate(value);
    if (parsed) setViewDate(parsed);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedDate = parseISODate(value);
  const minDate = min ? parseISODate(min) : null;
  const maxDate = max ? parseISODate(max) : null;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startWeekday = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells: (number | null)[] = [
    ...Array(startWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function isDisabled(day: number) {
    const date = new Date(year, month, day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  }

  function isSelected(day: number) {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  }

  function handleSelectDay(day: number) {
    if (isDisabled(day)) return;
    const date = new Date(year, month, day);
    onChange(toISODate(date));
    setOpen(false);
  }

  function goToPrevMonth() {
    setViewDate(new Date(year, month - 1, 1));
  }

  function goToNextMonth() {
    setViewDate(new Date(year, month + 1, 1));
  }

  function handleMonthSelect(newMonth: number) {
    setViewDate(new Date(year, newMonth, 1));
  }

  function handleYearSelect(newYear: number) {
    setViewDate(new Date(newYear, month, 1));
  }

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "YYYY-MM-DD"}
          className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open calendar"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-bg text-white hover:border-brand-accent"
        >
          📅
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-80 rounded-lg border border-white/10 bg-brand-card p-4 shadow-xl">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={goToPrevMonth}
              className="shrink-0 rounded px-2 py-1 text-white hover:bg-white/10"
              aria-label="Previous month"
            >
              ‹
            </button>

            <div className="flex flex-1 gap-2">
              <select
                value={month}
                onChange={(e) => handleMonthSelect(Number(e.target.value))}
                className="w-1/2 rounded border border-white/10 bg-brand-bg px-2 py-1 text-sm text-white focus:border-brand-accent focus:outline-none"
                aria-label="Select month"
              >
                {MONTH_NAMES.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => handleYearSelect(Number(e.target.value))}
                className="w-1/2 rounded border border-white/10 bg-brand-bg px-2 py-1 text-sm text-white focus:border-brand-accent focus:outline-none"
                aria-label="Select year"
              >
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={goToNextMonth}
              className="shrink-0 rounded px-2 py-1 text-white hover:bg-white/10"
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-brand-secondary">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {calendarCells.map((day, index) =>
              day === null ? (
                <span key={`empty-${index}`} />
              ) : (
                <button
                  key={day}
                  type="button"
                  disabled={isDisabled(day)}
                  onClick={() => handleSelectDay(day)}
                  className={`rounded py-1.5 text-sm transition-colors ${
                    isSelected(day)
                      ? "bg-brand-primary text-white"
                      : isDisabled(day)
                      ? "cursor-not-allowed text-brand-secondary/30"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {day}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              onChange(toISODate(new Date()));
              setOpen(false);
            }}
            className="mt-3 w-full rounded-lg border border-white/10 py-1.5 text-xs font-medium text-brand-accent hover:bg-white/5"
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
}