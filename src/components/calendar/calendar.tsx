import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import { ru } from "date-fns/locale";

import "react-day-picker/dist/style.css";
import "./calendar.scss";

type Props = {
  range?: DateRange;
  onChange: (range: DateRange | undefined) => void;
};

const Calendar = ({ range, onChange }: Props) => {
  return (
    <DayPicker
      mode="range"
      selected={range}
      onSelect={onChange}
      weekStartsOn={1}
      locale={ru}  
    />
  );
};

export default Calendar;