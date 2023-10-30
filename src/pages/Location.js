import { Box, ImageList, ImageListItem, Typography, Dialog, Paper } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Location() {
  const isMobile = useMediaQuery('(max-width:500px)');

  const photosQuinta = [
    {
    img: 'quinta1.jpg',
    index: 1,
    rows: isMobile ? 2 : 4,
    cols: 4
    },
    {
      img: 'quinta2.jpg',
      index: 2,
      rows: isMobile ? 1 : 2,
      cols: 2,
    },
    {
      img: 'quinta3.jpg',
      index: 3,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta4.jpg',
      index: 4,
      rows: isMobile ? 1 : 2,
      cols: 2,
    },
    {
      img: 'quinta8.jpg',
      index: 5,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'quinta6.jpg',
      index: 6,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta7.jpg',
      index: 7,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta11.jpg',
      index: 8,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'quinta5.jpg',
      index: 9,
      rows: isMobile ? 2 : 4,
      cols: 3,
    },
    {
      img: 'quinta17.jpg',
      index: 10,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'quinta9.jpg',
      index: 11,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'quinta13.jpg',
      index: 12,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta14.jpg',
      index: 13,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta12.jpg',
      index: 14,
      rows: isMobile ? 3 : 6,
      cols: 4,
    },
    {
      img: 'quinta15.jpg',
      index: 15,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'quinta16.jpg',
      index: 16,
      rows: isMobile ? 2 : 4,
      cols: 2,
    }]

    const [open, setOpen] = React.useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState({})

    function handleClickOpen(photo){
    setSelectedPhoto(photo)
     setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  function nextPhoto() {
    if(selectedPhoto.index === 16){
      setSelectedPhoto(photosQuinta.find((image) => image.index === 1)) 
    } else {
      setSelectedPhoto(photosQuinta.find((image) => image.index === (selectedPhoto.index + 1)))
    }
  }

  function previousPhoto() {
    if(selectedPhoto.index === 1){
      setSelectedPhoto(photosQuinta.find((image) => image.index === 16)) 
    } else {
      setSelectedPhoto(photosQuinta.find((image) => image.index === (selectedPhoto.index - 1)))
    }
  }

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Onde será a festa' />
            {!isMobile && (<Typography color='gray' 
                sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 52,
                alignItems: 'center',
                fontWeight: 500,
                fontFamily:'Allura',
                paddingTop: '80px'
                }}>
                Onde será a festa
            </Typography>)}

            <Box display='flex' flexDirection='row' justifyContent='center' paddingTop= {isMobile ? '80px' : '40px'}>
                <Box width='100%' display='flex' justifyContent='end'>
                  {<img alt='' style={{ width: isMobile ? '100px' : '200px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Typography color='gray' 
                    sx={{
                      textAlign: 'center',
                      width: '100%',
                      fontSize: isMobile ? 16 : 24,
                      alignItems: 'center',
                      fontWeight: 400
                    }}>
                    A festa será na Quinta do Avesso, um lugar muito charmoso e que nos apaixonamos logo de cara. Tipo como foi com a gente em 2019.            
                  </Typography>
                </Box>
                <Box width='100%' display='flex' justifyContent='start'>
                  {<img alt='' style={{ width: isMobile ? '100px' : '200px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
                </Box>
            </Box>

            
            <Box sx={{
              marginTop: 2
              }}
            >
              <Box display='flex' justifyContent='center' sx={{
                marginTop:3
                }}>
                <ImageList
                    sx={{ width: isMobile ? 400 : 900}}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                  {photosQuinta.map((item) => (
                    <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                         {...srcset(item.img, 121, item.rows, item.cols)}
                         alt={item.title}
                         loading="lazy"
                         onClick={() => handleClickOpen(item)}
                         style={{borderRadius:'7px'}}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <Box>
                <Typography color='black' 
                  sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 18,
                  alignItems: 'center',
                  fontWeight: 400,
                  fontFamily:'Roboto',
                  marginTop:4
                  }}>
                  Localização da Quinta do Avesso
                </Typography>
                <Box display='flex' justifyContent='center'>
                  <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2955764538806!2d-8.725537123945761!3d41.2806711713136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2443650edff24b%3A0xbea80fa3296ec01a!2sQuinta%20do%20Avesso!5e0!3m2!1spt-PT!2spt!4v1698238467668!5m2!1spt-PT!2spt" 
                  height="400" loading="lazy" style={{border:0, marginTop:30, width: isMobile ? 400 : 700}}></iframe>
                </Box>
              </Box>
            </Box>
            <Footer /> 

          
            <Dialog
              onClose={handleClose}
              open={open}
              maxWidth= {isMobile ? 'sm' : 'xl'}
              sx={{
                backgroundColor: 'gray 0.8',
                height:'100%'
              }}
            >
              <ArrowForwardIosIcon onClick={nextPhoto}
                sx={{
                  position: 'absolute',
                  top: '45%',
                  left: isMobile ? '90%' : '95%',
                  backgroundColor: 'white',
                  opacity: 0.4,
                  alignContent: 'center',
                  borderRadius: '5px',
                  fontSize: isMobile ? '26px' : '34px'
                }}/>
                <img
                  {...srcset(selectedPhoto.img, isMobile ? 400 : 900, 1, 1)}
                  alt={selectedPhoto.title}
                  loading="lazy"
                  style={{width:'100%'}}
                />
              <ArrowBackIosNewIcon onClick={previousPhoto}
              sx={{
                position: 'absolute',
                top: '45%',
                right: isMobile ? '90%' : '95%',
                backgroundColor: 'white',
                opacity: 0.4,
                alignItems: 'center',
                borderRadius: '5px',
                fontSize: isMobile ? '26px' : '34px'
              }}/>
              
            </Dialog>
        </Box>
    );
}