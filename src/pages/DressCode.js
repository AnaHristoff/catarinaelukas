import { Box, ImageList, ImageListItem, Typography, Dialog } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function DressCode() {
  const isMobile = useMediaQuery('(max-width:500px)');

  const looks = [
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952762/looks/look31_df5nn7.jpg',
      index: 1,
      rows: isMobile ? 2 : 4,
      cols: 1
      },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952758/looks/look28_kjdmfo.jpg',
      index: 2,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952761/looks/look30_dftaxl.jpg',
      index: 3,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952757/looks/look26_wayndn.jpg',
      index: 4,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952760/looks/look29_mgi5vm.jpg',
      index: 5,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698955065/looks/look27_pmn4y6.jpg',
      index: 6,
      rows: isMobile ? 2 : 5,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952755/looks/look25_fijjyf.jpg',
      index: 7,
      rows: isMobile ? 2 : 5,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698955086/looks/look20_vstmbp.jpg',
      index: 8,
      rows: isMobile ? 2 : 5,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952754/looks/look24_mouham.jpg',
      index: 9,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952751/looks/look21_f4pt8h.jpg',
      index: 10,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952752/looks/look22_z4sk8x.jpg',
      index: 11,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952748/looks/look18_jacvuc.jpg',
      index: 12,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952743/looks/look13_uotjee.jpg',
      index: 13,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952747/looks/look17_pelegq.jpg',
      index: 14,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952745/looks/look15_gs2oyx.jpg',
      index: 15,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952742/looks/look11_lbyjcp.jpg',
      index: 16,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952744/looks/look14_c3xskj.jpg',
      index: 17,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952743/looks/look12_qhzulr.jpg',
      index: 18,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952741/looks/look10_tnvfqr.jpg',
      index: 19,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952738/looks/look6_sgxdwi.jpg',
      index: 20,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952740/looks/look9_ddw6kx.jpg',
      index: 21,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952737/looks/look5_j37ead.jpg',
      index: 22,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952739/looks/look8_l4uiff.jpg',
      index: 23,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952736/looks/look4_swatty.jpg',
      index: 24,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698955107/looks/look7_wa4gkq.jpg',
      index: 25,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952736/looks/look3_jjqlot.jpg',
      index: 26,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952735/looks/look2_rtudwz.jpg',
      index: 27,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698955119/looks/look1_bh8vyj.jpg',
      index: 28,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/casamento/image/upload/v1698952746/looks/look16_r954xk.jpg',
      index: 29,
      rows: isMobile ? 2 : 4,
      cols: 1,
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
    if(selectedPhoto.index === looks.length - 1){
      setSelectedPhoto(looks.find((image) => image.index === 1)) 
    } else {
      setSelectedPhoto(looks.find((image) => image.index === (selectedPhoto.index + 1)))
    }
  }

  function previousPhoto() {
    if(selectedPhoto.index === 1){
      setSelectedPhoto(looks.find((image) => image.index === looks.length - 1)) 
    } else {
      setSelectedPhoto(looks.find((image) => image.index === (selectedPhoto.index - 1)))
    }
  }

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Como se vestir' />
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
                Como se vestir
            </Typography>)}


            <Box display='flex' flexDirection='row' paddingTop= {isMobile ? '80px' : '40px'}>
                <Box width='100%' display='flex' justifyContent='end'>
                {<img alt='' style={{ width: isMobile ? '100px' : '200px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
                <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 24,
              alignItems: 'center',
              fontWeight: 400
            }}>
              A festa começa cedo, por volta das 14h, e, se tivermos tempo bom, as primeiras horas serão no espaço exterior. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 16 : 24,
              alignItems: 'center',
              fontWeight: 400
            }}>
               Sugerimos roupas leves, frescas, de cores mais claras e sapatos que deixem vocês confortáveis pisando na grama (sem ser tênis de academia!!!)
          </Typography>
              </Box>
              <Box width='100%' display='flex' justifyContent='start'>
              {<img alt='' style={{ width: isMobile ? '100px' : '200px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>

            <Box sx={{
              marginTop:10
            }}>
              <Box display='flex' justifyContent='center' sx={{
                marginTop:3
                }}>
                <ImageList
                    sx={{ width: isMobile ? 400 : 900}}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                  {looks.map((item) => (
                    <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                         {...srcset(item.img, 121, item.rows, item.cols)}
                         alt={item.title}
                         onClick={() => handleClickOpen(item)}
                         style={{borderRadius:'7px', cursor:'pointer'}}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Box>
            <Footer /> 

            <Dialog
              onClose={handleClose}
              open={open}
              maxWidth= {isMobile ? 'sm' : 'md'}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                height:'100%'
              }}
            >
              <ArrowForwardIosIcon onClick={nextPhoto}
                sx={{
                  position: 'absolute',
                  top: '45%',
                  left: isMobile ? '90%' : '90%',
                  backgroundColor: 'white',
                  opacity: 0.4,
                  alignContent: 'center',
                  borderRadius: '5px',
                  fontSize: isMobile ? '26px' : '34px',
                  cursor:'pointer'
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
                right: isMobile ? '90%' : '90%',
                backgroundColor: 'white',
                opacity: 0.4,
                alignItems: 'center',
                borderRadius: '5px',
                fontSize: isMobile ? '26px' : '34px',
                cursor:'pointer'
              }}/>
              
            </Dialog> 
        </Box>
    );
}