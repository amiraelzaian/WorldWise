import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((e) => e.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
