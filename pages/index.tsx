import { Header, CityInfo, InfoCard, MetricToggle } from "@/components";
import { MetricProvider } from "@/contexts/metric";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white flex flex-col justify-center items-center h-screen">
        <CityInfo />
        <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:w-3/4">
          <InfoCard title="Humidity" value="91" sub="%" icon="/droplet.svg" />
          <InfoCard
            title="Wind speed"
            value="2.45"
            sub="m/s"
            icon="/wind.svg"
          />
          <InfoCard title="Wind direction" value="NNE" icon="/compass.svg" />
          <InfoCard title="Visibility" value="10.0" sub="km" icon="/eye.svg" />
          <InfoCard title="Sunrise" value="5:31" icon="/sunrise.svg" />
          <InfoCard title="Sunset" value="17:32" icon="/sunset.svg" />
        </div>
        <MetricProvider>
          <MetricToggle />
        </MetricProvider>
      </main>
    </>
  );
}
