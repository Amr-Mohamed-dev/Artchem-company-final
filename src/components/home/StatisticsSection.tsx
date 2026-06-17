import { statistics } from "../../data/statistics";
import { StatCounter } from "../common/StatCounter";

export function StatisticsSection() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <StatCounter 
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
