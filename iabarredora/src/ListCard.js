import React, { useState, useEffect } from 'react';
import Card from './Card'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function ListCard() {

  const [listQuadrant, setListQuadrante] = useState([{
    id: 1,
    hasGarbage: false
  },
  {
    id: 2,
    hasGarbage: false
  }]);

  const [position, setPosition] = useState(1);
  const [dataLog, setDataLog] = useState([]);
  const [intervalData, setIntervalData] = useState(null);

  useEffect(() => {
    verifyQuadrants();
  }, [listQuadrant]);

  const verifyQuadrants = () => {
    if (position == listQuadrant[0].id) {
      if (listQuadrant[0].hasGarbage) {
        setDataLog((dataLogPrev) => [...dataLogPrev, "Aspirar A", "limpiando...", "ir a la derecha"]);
        listQuadrant[0].hasGarbage = false;
        setListQuadrante(listQuadrant)
        setPosition(2);
      }
    }
    if (position == listQuadrant[1].id) {
      if (listQuadrant[1].hasGarbage) {
        setDataLog((dataLogPrev) => [...dataLogPrev, "Aspirar B", "limpiando...", "ir a la izquierda"]);
        listQuadrant[1].hasGarbage = false;
        setListQuadrante(listQuadrant)
        setPosition(1);
      }
    }
  }



  const startInterval = () => {
    if (intervalData == null) {
      const newInterval = setInterval(() => {

        const timeOutData = setTimeout(() => {
          verifyQuadrants();
          setListQuadrante([{
            id: 1,
            hasGarbage: Math.random() < 0.3
          },
          {
            id: 2,
            hasGarbage: Math.random() < 0.3
          }]);

        }, 3500);
      }, 6000);

      setIntervalData(newInterval);
    }
  }




  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          border: '2px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <Grid container spacing={2} style={{ height: '70vh' }}>
          {listQuadrant.map((q) =>
            <Grid item xs={4}>
              <Card cleanerHere={position === q.id} garbage={q.hasGarbage} />
            </Grid>
          )}

          <Grid item xs={4} >
            <div style={{ maxHeight: '60vh', overflowY: 'scroll', height: '60vh', background: '#E7E7E7', padding: '10px' }}>
              {dataLog.length > 0 && dataLog.map((dl) => <p>{dl}</p>)}
            </div>
          </Grid>

        </Grid>
      </Box>

      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => '#fff',
          border: '2px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >

        <Button
          style={{ marginRight: '10px' }}
          onClick={() => {
            startInterval();
          }}
        >
          INICIAR
        </Button>

        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            if (intervalData !== null) {
              clearInterval(intervalData);
              setIntervalData(null);
              setDataLog((dataLogPrev) => [...dataLogPrev, "<=====DETENER======>"]);
            }
          }}
        >
          DETENER
        </Button>
      </Box>
    </div>
  );
}