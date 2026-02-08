import { useEffect, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import "./chatsCalendar.scss";
import Calendar from "../calendar/calendar";
import { TimeRange } from "../timeRange/timeRange";

const ChatsCalendar = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const MONTHS_RU = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  function formatRange(range?: DateRange) {
    if (!range?.from || !range?.to) {
      return "3–5 февраля 2026г.";
    }

    const fromDay = range.from.getDate();
    const toDay = range.to.getDate();
    const month = MONTHS_RU[range.from.getMonth()];
    const year = range.from.getFullYear();

    return `${fromDay}–${toDay} ${month} ${year}г.`;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`chats-calendar-wrapper ${isOpen ? "active" : ""}`}
    >
      <div
        className="chats-calendar-header G-align-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="chats-calendar-number">{formatRange(range)}</p>
        <i className="icon icon-arrowDown"></i>
      </div>

      <div className="chats-calendar-main">
        <Calendar range={range} onChange={setRange} />

        <TimeRange />
      </div>
    </div>
  );
};

export default ChatsCalendar;
