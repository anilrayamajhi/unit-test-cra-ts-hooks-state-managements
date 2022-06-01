import React, { useEffect, useState } from "react";

const APIComponent: React.FC = () => {
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

  return <div>{data && <div role="contentinfo">Name: {data.name}</div>}</div>;
};

export default APIComponent;
