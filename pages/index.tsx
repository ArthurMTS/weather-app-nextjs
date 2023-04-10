import { Header, CityInfo, InfoCard } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white flex flex-col justify-center items-center p-10 gap-6 h-fit">
        <CityInfo />
        <div className="w-4/5 flex flex-wrap justify-center gap-6">
          <InfoCard
            title="Humidity"
            value="91"
            sub="%"
            icon="/droplet.svg"
          />
          <InfoCard
            title="Wind speed"
            value="2.45"
            sub="m/s"
            icon="/wind.svg"
          />
          <InfoCard
            title="Wind direction"
            value="NNE"
            icon="/compass.svg"
          />
          <InfoCard
            title="Visibility"
            value="10.0"
            sub="km"
            icon="/eye.svg"
          />
          <InfoCard
            title="Sunrise"
            value="5:31"
            icon="/sunrise.svg"
          />
          <InfoCard
            title="Sunset"
            value="17:32"
            icon="/sunset.svg"
          />
        </div>
      </main>
    </>
  );
}
