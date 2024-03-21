import { useEffect, useState } from 'react';

export function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const promise = fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=1d260c5f4897b555ae217809965ad963'
    );
    promise.then((res) => res.json()).then((data) => setWeather(data));
  }, []);

  return (
    <>
      <h1>Weather</h1>
      <p>
        Current Temperature in Brasov:{' '}
        <strong>{(weather?.main.temp - 273.15).toFixed(1)}&deg; C</strong>
      </p>
    </>
  );
}
