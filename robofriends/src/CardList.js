import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const Cardlist = function () {
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
