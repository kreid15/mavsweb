import React, { useEffect, useState } from "react";
import "./Team.css"

function Team() {
  const [itemsNB, setitemsNB] = useState({});
  const getTeams = () => {
    fetch("miamiHeat.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setitemsNB(myJson);
      });
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      {Object.keys(itemsNB).length > 0 &&
        itemsNB.depthChart[1].players.map((item) => {
          return (
            <div key={item.nbaID}>
              <h1>{item.name}</h1>
              <h1>{item.jerseyNum}</h1>
              <img src={item.photoUrl} alt="memory"/>
              </div>
          );
        })}
    </div>
  );
}
export default Team;