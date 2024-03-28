import { useEffect, useState } from 'react';

export function Weather() {
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    city: '',
    country: 'DE',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        const promise = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1d260c5f4897b555ae217809965ad963`
        );
        promise
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);
            setValues({ city: data.name, country: data.sys.country });
          });
      },
      () => setErrorMessage('Could not get location. Please try again later.')
    );
  }, []);

  function handleInputChange(e) {
    // const inputName = e.target.name;
    // const newValues = {...values};
    // newValues[inputName] = e.target.value;
    // setValues(newValues);
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${values.city},${values.country}&appid=1d260c5f4897b555ae217809965ad963`
    ).then((res) => res.json());

    setWeather(data);
  }

  return (
    <>
      <h1>Weather</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          id="city"
          value={values.city}
          onChange={handleInputChange}
        />

        <label htmlFor="country">Country: </label>
        <select
          name="country"
          id="country"
          value={values.country}
          onChange={handleInputChange}
        >
          <option value="RO">Romania</option>
          <option value="DE">Germany</option>
          <option value="US">United States</option>
        </select>

        <button type="submit">Search</button>
      </form>
      {!weather && <strong>Loading ...</strong>}
      {weather && (
        <>
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            The weather is: {weather.weather[0].description}.
          </p>
          <p>
            Current Temperature in {weather.name}:{' '}
            <strong>{(weather.main.temp - 273.15).toFixed(1)}&deg; C</strong>
          </p>
        </>
      )}
    </>
  );
}
