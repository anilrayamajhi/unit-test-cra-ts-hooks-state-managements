import React from "react";

const Person = ({ name }: { name: string }) => {
  return <div role="contentinfo">Name: {name}</div>;
};

export default Person;
