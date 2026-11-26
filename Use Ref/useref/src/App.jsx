import { useEffect, useState } from "react";

export default function App() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("http://api.coinlayer.com/live?access_key=aa7174b52e813561db2fa640bfd9deb6")
      .then((r) => r.json())
      .then((d) => setRates(d.rates));
  }, []);

  return (
    <ul>
      {Object.entries(rates).map(([coin, price]) => (
        <li key={coin}>{coin}: ${price}</li>
      ))}
    </ul>
  );
}