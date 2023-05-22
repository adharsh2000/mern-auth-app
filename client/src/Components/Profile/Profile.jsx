import React, { useState,useRef,useEffect } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import "./Profile.css"
import { Alert, Snackbar } from "@mui/material"
import axios from '../../axios'

function Profile({details, changeImage}) {
  const [image, setImage] = useState('')
  const [error, setError] = useState(false)
  const fileRef = useRef()
  useEffect(()=>{
    setImage(details.image)
  },[details.image])
  console.log(image);
  const handleSubmit = (e) => {
    e.preventDefault()
    const file = fileRef.current.files[0];
    console.log(file);
    const formData = new FormData();
    if (!file) {
      setError(true);
    } else {
      setError(false);
    }
    formData.append('image',file,file?.name)
    const data = formData;
    axios.patch('/update', data,{
      headers: {
        'auth-token':JSON.parse(localStorage.getItem('authorization.user')),
        'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
      changeImage(res.data.url)
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="profile-page">
     
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={details.image}
            sx={{ width: 150, height: 150 }}></Avatar>
            <p style={{color:'red'}}>{error}</p>
            <Box component="form" noValidate sx={{ mt: 3 }} encType='multipart/form-data'  >
              <p className="error"></p>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <p>{details.username}</p>
                </Grid>
                <Grid item xs={12}>
                  <p>{details.email}</p>
                </Grid>
                <Grid item xs={12}>
                  <p>{details.phone}</p>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" sx={{  ml: 11 }}>
                    Upload Profile Picture
                    <input ref={fileRef} type="file" name="image"  hidden accept="image/*"
                    onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}} />
                  </Button>                
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Container>
        <Snackbar  autoHideDuration={6000} >
        <Alert  severity="success" sx={{ width: '100%' }}>
          Image uploaded successfully
        </Alert>
      </Snackbar>

    </div>
  )
}

export default Profile