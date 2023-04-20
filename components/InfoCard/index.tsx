interface InfoCardProps {
  title: string;
  value: string | number;
  sub?: string;
  icon: string;
}

export function InfoCard({ title, value, sub, icon }: InfoCardProps) {
  return (
    <section className="flex justify-between items-center bg-slate-100 rounded-xl p-2 shadow w-32 h-20 sm:w-40 sm:h-24 md:w-44 md:h-32 xl:w-56 xl:p-2">
      <img className="w-6 sm:w-10 md:w-14 xl:w-20" src={icon} alt="icon" />
      <div className="flex flex-col items-end">
        <p className="text-dark text-right text-sm sm:text-base md:text-lg xl:text-2xl">
          {title}
        </p>
        <p className="font-semibold font-mono text-base sm:text-xl md:text-2xl xl:text-4xl">
          {value}
        </p>
        <p className="text-dark text-sm sm:text-base md:text-lg xl:text-2xl">
          {sub}
        </p>
      </div>
    </section>
  );
}
