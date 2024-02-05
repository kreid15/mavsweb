import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import playerImage from "../../images/oladipo.png";
import DenseTable from './Table';
import Dropdown from './Dropdown'
import Footer from "../../components/Footer";
import "./Oladipo.css";

export default function Players() {
  const [gameData, setGameData] = useState();

  const getData = () => {
    fetch("oladipo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setGameData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='top'>
      <Header/>
      <h1 className='teamName'>HEAT</h1>
      <div className='rect'
        style={{
          width: '10px',
          height: '152px',
          backgroundColor: '#98012E'
        }}
      ></div>
      <img src={playerImage} alt="teams" className="player-image"/>
      <h3 className='hash-tag'>#</h3>
      <h2 className='play-num'>{gameData && gameData.bio[0].jerseyNum}</h2>
      <h2 className='position'>{gameData && gameData.bio[0].position}</h2>
      <h1 className='firstN'>{gameData && gameData.bio[0].firstName}</h1>
      <h1 className='lastN'>{gameData && gameData.bio[0].lastName}</h1>
      <h1 className='height'>Height</h1>
      <h1 className='num1'>{gameData && Math.floor(gameData.bio[0].height / 12)}</h1>
      <h1 className='num2'>{gameData && gameData.bio[0].height % 12}</h1>
      <h1 className='feet'>ft</h1>
      <h1 className='inches'>in</h1>
      <h1 className='weight'>Weight</h1>
      <h1 className='weightNum'> {gameData && gameData.measurements[0].weight}</h1>
      <h1 className='pounds'>lbs</h1>
      <div className='stats'>
        <div className="rpgB">
          <h1 className="rpgT">Rebounds Per Game</h1>
          <h2 className="rpgN">{gameData && gameData.overviewPerGame[0].REB}</h2> 
        </div>
        <div className="ppgB">
          <h1 className="ppgT">Points Per Game</h1>
          <h2 className="ppgN">{gameData && gameData.overviewPerGame[0].PTS}</h2> 
        </div>
        <div className="apgB">
          <h1 className="apgT">Assists Per Game</h1>
          <h2 className="apgN"> {gameData && gameData.overviewPerGame[0].AST} </h2> 
        </div>
      </div>
      <Dropdown/>
      <DenseTable/>
      <Footer/>
    </div>
  );
}
