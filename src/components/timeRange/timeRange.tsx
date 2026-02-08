import { useState } from "react";
import "./timeRange.scss";


export const TimeRange = () => {
  const [enabled, setEnabled] = useState(false);
  const [from, setFrom] = useState("00:00");
  const [to, setTo] = useState("00:00");

  return (
    <div className={`time-range ${enabled ? "active" : ""}`}>
      <div className="time-range-header">
        <p>Временной диапазон</p>

        <label className="time-switch">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <span className="time-slider"></span>
        </label>

      </div>

      <div className="time-range-inputs">
        <input
          type="time"
           
          value={from}
          disabled={!enabled}
          onChange={(e) => setFrom(e.target.value)}
        />

        <span className="time-dash">–</span>

        <input
          type="time"
           
          value={to}
          disabled={!enabled}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
    </div>
  );
};