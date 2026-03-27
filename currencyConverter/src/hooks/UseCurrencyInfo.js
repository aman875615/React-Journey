import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res => res.json())
      .then(res => setData(res.rates))  // ✅ yaha change kiya
      .catch(error => console.error("Error:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;