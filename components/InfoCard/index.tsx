interface InfoCardProps {
  title: string;
  value: string;
  sub?: string;
  icon: string;
}

export function InfoCard({ title, value, sub, icon }: InfoCardProps) {
  return (
    <section className="flex justify-between items-center w-72 bg-whiter rounded-xl p-4 shadow">
      <img src={icon} alt="compass" />
      <div className="flex flex-col items-end">
        <p className="text-xl text-dark">{title}</p>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-xl text-dark">{sub}</p>
      </div>
    </section>
  );
}
