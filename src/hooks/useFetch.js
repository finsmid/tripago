import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch the data.");
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
