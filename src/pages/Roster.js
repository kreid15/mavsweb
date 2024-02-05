import React, { useEffect, useState } from "react";
import "./Roster.css"

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
    <div className="player-grid">
    {itemsNB && itemsNB.depthChart && 
      [].concat(...itemsNB.depthChart.map(depthChartItem => depthChartItem.players))
      .sort((a, b) => a && b && a.jerseyNum - b.jerseyNum)
      .map((item) => {
        return (
          item && <a href={`/${item.lastName}`} key={item.nbaID}>
            <div className="player-info">
              <img src={item.photoUrl} alt="memory"/>
              <h2 className="jersey">{item.jerseyNum ? item.jerseyNum : 'N/A'}</h2>
              <div className="player-details">
                <h2 className="player-name">{item.name}</h2>
                <h2 className="player-position">{item.position}</h2>
              </div>
            </div>
          </a>
        );
      })
    }
  </div>
  );
}
export default Team;