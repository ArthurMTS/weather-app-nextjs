export function CityInfo() {
  return (
    <section className="w-full flex justify-between items-center w-5/6 bg-whiter rounded-xl p-5 shadow">
      <div className="flex flex-col items-center">
        <p className="text-3xl text-dark">Light Rain</p>
        <p className="text-6xl font-semibold text-black">27°C</p>
        <p className="text-lg text-dark">Feels like 30°C</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold text-dark">Monday, 14:18</p>
        <div className="flex gap-1">
          <img className="w-10" src="/map-pin.svg" alt="map pin" />
          <p className="text-4xl font-bold text-black">Jaguaruana, BR</p>
        </div>
      </div>
      <img src="/cloud-rain.svg" alt="weather" />
    </section>
  );
}
