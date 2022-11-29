import React from "react";
import Card from "./Card";

const Cardlist = function ({ robots }) {
  return (
    <div>
      {robots.map((el) => {
        return (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            username={el.username}
            email={el.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
