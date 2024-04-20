import React, { useState } from 'react';
import { Card, CardContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';

import "./assestCard.css";

const AssetCard = ({ title, data }) => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <CardContent>
        <div className='main'>
          <h2 className='text'>{title}</h2>
          <Button variant="contained" onClick={toggleTable}>
            {showTable ? 'Hide Table' : 'Show Table'}
          </Button>
        </div>
        {showTable && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name of the holding</TableCell>
                  <TableCell>Ticker</TableCell>
                  <TableCell>Average price</TableCell>
                  <TableCell>Market Price</TableCell>
                  <TableCell>Latest change percentage</TableCell>
                  <TableCell>Market Value in Base CCY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((holding, index) => (
                  <TableRow key={index}>
                    <TableCell>{holding.name}</TableCell>
                    <TableCell>{holding.ticker}</TableCell>
                    <TableCell>{holding.avg_price}</TableCell>
                    <TableCell>{holding.market_price}</TableCell>
                    <TableCell>{holding.latest_chg_pct}</TableCell>
                    <TableCell>{holding.market_value_ccy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default AssetCard;