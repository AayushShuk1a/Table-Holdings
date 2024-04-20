import React from 'react';
import { useEffect, useState } from 'react'
import { Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import AssetCard from './Components/AssestCard';



function App() {

  const [data, setData]= useState([]);

  useEffect(()=>{
    axios.get("https://canopy-frontend-task.vercel.app/api/holdings")
    .then((res)=>{
      setData(res.data.payload);
      
    });
  },[]);

  



  const realEstate = data.filter(item => item.asset_class === 'Real Estate');
  const cash = data.filter(item => item.asset_class === 'Cash');
  const bonds = data.filter(item => item.asset_class === 'Bond');
  const equity = data.filter(item => item.asset_class === 'Equity');
  const loan = data.filter(item => item.asset_class === 'Loan');

  

  return (
    <Container maxWidth="false">
      <Typography variant="h3" gutterBottom>
        Asset Classes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={12}>
          <AssetCard title="Real Estate" data={realEstate} />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <AssetCard title="Cash" data={cash} />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <AssetCard title="Bonds" data={bonds} />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <AssetCard title="Equity" data={equity} />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <AssetCard title="Loan" data={loan} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
