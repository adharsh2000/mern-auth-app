import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Home.css'

function Home({details}) {
  return (
    <div className='home-page'>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome to Home Page 👋😊
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {details.username}
        </Typography>
        </CardContent>
    </Card>
    </div>
  )
}

export default Home