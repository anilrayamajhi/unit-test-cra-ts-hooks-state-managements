import { useEffect, useState } from "react";

export function useAPI() {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data };
}
