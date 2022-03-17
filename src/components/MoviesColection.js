import React from "react";
import Card from "./Card";

const MoviesColections = ({ results, title }) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default MoviesColections;
