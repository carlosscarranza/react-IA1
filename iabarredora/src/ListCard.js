import React, { useState, useEffect } from 'react';
import Card from './Card'
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { animateScroll as scroll } from 'react-scroll';


export default function ListCard() {

  const [listQuadrant, setListQuadrante] = useState([{
    id: 1,
    hasGarbage: Math.random() < 0.4
  },
  {
    id: 2,
    hasGarbage: Math.random() < 0.4
  }]);

  const [position, setPosition] = useState(1);
  const [dataLog, setDataLog] = useState([]);
  useEffect(() => {
    setInterval(() => {

      verifyQuadrants();
      setTimeout(() => {
        setListQuadrante([{
          id: 1,
          hasGarbage: Math.random() < 0.4
        },
        {
          id: 2,
          hasGarbage: Math.random() < 0.4
        }]);
      }, 3000);
    }, 6000);
  }, []);

  useEffect(() => {
    verifyQuadrants();
  }, [listQuadrant]);

  const verifyQuadrants = () => {

    if (position == listQuadrant[0].id) {
      if (listQuadrant[0].hasGarbage) {
        setDataLog((dataLogPrev) => [...dataLogPrev, "Aspirar A", "limpiando...", "ir a la derecha"]);
        setPosition(2);
      }
    }
    if (position == listQuadrant[1].id) {
      if (listQuadrant[1].hasGarbage) {
        setDataLog((dataLogPrev) => [...dataLogPrev, "Aspirar B", "limpiando...", "ir a la izquierda"]);
        setPosition(1);
      }
    }
  }

  return (
    <Grid container style={{ height: '100px' }}>
      {listQuadrant.map((q) =>
        <Grid item xs={4}>
          <Card cleanerHere={position === q.id} garbage={true} />
        </Grid>
      )}
  
      <Grid item xs={4} >
        <div style={{ height: '100px' }}>
          {dataLog.length > 0 && dataLog.map((dl) => <p>{dl}</p>)}
          </div>
      </Grid>

    </Grid>

  );
}