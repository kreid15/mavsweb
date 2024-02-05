import Table from '@mui/material/Table';
import React, { useState, useEffect } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable() {
  const [gameData, setgameData] = useState();
  const getData = () => {
    fetch("oladipo.json", {
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
        setgameData(myJson);
      });
  };

  useEffect(() => {
    getData();
   }, []);

  return (
    <TableContainer component={Paper}>
      <tbody>
      {gameData?.gameLog.map((game) => (
        <tr key={game.gameId}>
        </tr>
      ))}
    </tbody>

      <Table sx={{ Width: 1390 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">OPP</TableCell>
            <TableCell align="right">RESULT</TableCell>
            <TableCell align="right">MIN</TableCell>
            <TableCell align="right">FG</TableCell>
            <TableCell align="right">FG%</TableCell>
            <TableCell align="right">3PT</TableCell>
            <TableCell align="right">3P%</TableCell>
            <TableCell align="right">FT</TableCell>
            <TableCell align="right">FT%</TableCell>
            <TableCell align="right">REB</TableCell>
            <TableCell align="right">AST</TableCell>
            <TableCell align="right">BLK</TableCell>
            <TableCell align="right">STL</TableCell>
            <TableCell align="right">PF</TableCell>
            <TableCell align="right">TO</TableCell>
            <TableCell align="right">PTS</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
              {gameData?.gameLog.map((game) => (
            <TableRow key={game.gameId}>
              <TableCell align="right">{game.date}</TableCell>
              <TableCell align="right">vs {game.opponent}</TableCell>
              <TableCell align="right">{game.outcomeFormatted}</TableCell>
              <TableCell align="right">{game.timePlayed}</TableCell>
              <TableCell align="right">{game.fgm}-{game.fga}</TableCell>
              <TableCell align="right">{game["fg%"]?? 0}</TableCell>
              <TableCell align="right">{game.tpm}-{game.tpa}</TableCell>
              <TableCell align="right">{game["tp%"]?? 0}</TableCell>
              <TableCell align="right">{game.ftm}-{game.fta}</TableCell>
              <TableCell align="right">{game["ft%"]?? 0}</TableCell>
              <TableCell align="right">{game.reb}</TableCell>
              <TableCell align="right">{game.ast}</TableCell>
              <TableCell align="right">{game.blk}</TableCell>
              <TableCell align="right">{game.stl}</TableCell>
              <TableCell align="right">{game.pf}</TableCell>
              <TableCell align="right">{game.tov}</TableCell>
              <TableCell align="right">{game.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}