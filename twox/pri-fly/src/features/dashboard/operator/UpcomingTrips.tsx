const upcomingTrips = [
  { route: "TEB → MIA", date: "Aug 12", status: "Confirmed" },
  { route: "VNY → ASE", date: "Aug 14", status: "Crew assigned" },
  { route: "LAS → SFO", date: "Aug 18", status: "Confirmed" },
];

/** Sample rows until this widget is wired to the RFQ/flight-leg API. */
export default function UpcomingTrips() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h3 className="text-base font-semibold text-[var(--text-primary)]">Upcoming Trips</h3>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {upcomingTrips.map((trip) => (
          <div key={trip.route + trip.date} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">{trip.route}</p>
              <p className="text-xs text-[var(--text-muted)]">{trip.date}</p>
            </div>
            <span className="shrink-0 rounded-full bg-[var(--primary)]/15 px-2.5 py-1 text-xs font-medium text-[var(--primary)]">
              {trip.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
