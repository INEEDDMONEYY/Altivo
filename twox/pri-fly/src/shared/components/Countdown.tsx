import { useCountdown } from "../../hooks/useCountdown";

interface CountdownProps {
  targetDate: Date | string;
  className?: string;
}

export default function Countdown({ targetDate, className = "" }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className={`flex gap-3 text-center ${className}`}>
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Min", value: minutes },
        { label: "Sec", value: seconds },
      ].map((unit) => (
        <div key={unit.label}>
          <div className="text-xl font-semibold text-slate-900">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs text-slate-500">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
