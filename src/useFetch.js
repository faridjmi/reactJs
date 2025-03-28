import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Error getting blogs data!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoaded(false);
        setIsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Data fetch aborted");
        } else {
          setIsError(err.message);
          setIsLoaded(false);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, isLoaded, error };
};

export default useFetch;
