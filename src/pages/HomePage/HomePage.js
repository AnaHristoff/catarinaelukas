import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainPhoto from '../../components/MainPhoto'
import Countdown from '../../components/Countdown';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Box, ImageList, ImageListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const photoFolhas = {
  image: 'folhas-principal.jpg'
};
const weddingText = 'A única certeza que quero ter é viver intensamente essa incerteza'
const weddingDay = '04 de Outubro de 2024'
const weddingPlace = 'Quinta do Avesso, Portugal'
const defaultTheme = createTheme();

export const HomePage = () => {
  const isMobile = useMediaQuery('(max-width:500px)');

  const photosCatarinaLukas = [
    
    {
      img: 'catarinaelukas4.jpg',
      index: 4,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas5.jpg',
      index: 5,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'catarinaelukas6.jpg',
      index: 6,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas7.jpg',
      index: 7,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas8.jpg',
      index: 9,
      rows: isMobile ? 2 : 4,
      cols: 3,
    },
    {
      img: 'catarinaelukas9.jpg',
      index: 10,
      rows: isMobile ? 2 : 4,
      cols: 1,
    },
    {
      img: 'catarinaelukas10.jpg',
      index: 11,
      rows: isMobile ? 2 : 4,
      cols: 4,
    },
    {
      img: 'catarinaelukas11.jpg',
      index: 12,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas12.jpg',
      index: 13,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas13.jpg',
      index: 14,
      rows: isMobile ?  2 : 4,
      cols: 4,
    },
    {
      img: 'catarinaelukas14.jpg',
      index: 15,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{

      img: 'catarinaelukas15.jpg',
      index: 18,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas16.jpg',
      index: 16,
      rows: isMobile ? 2 : 4,
      cols: 4,
    }
    ,
    {
      img: 'catarinaelukas18.jpg',
      index: 19,
      rows: isMobile ? 2 : 4,
      cols: 2,
    }
    ,{
      img: 'catarinaelukas19.jpg',
      index: 20,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas20.jpg',
      index: 21,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    ,{
      img: 'catarinaelukas21.jpg',
      index: 22,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas22.jpg',
      index: 23,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas23.jpg',
      index: 24,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas24.jpg',
      index: 25,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{
      img: 'catarinaelukas25.jpg',
      index: 26,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas26.jpg',
      index: 27,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },{
      img: 'catarinaelukas27.jpg',
      index: 28,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas28.jpg',
      index: 29,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas29.jpg',
      index: 30,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas30.jpg',
      index: 31,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas31.jpg',
      index: 32,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas32.jpg',
      index: 33,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas33.jpg',
      index: 34,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas34.jpg',
      index: 35,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas36.jpg',
      index: 36,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas37.jpg',
      index: 37,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas38.jpg',
      index: 38,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas39.jpg',
      index: 39,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas40.jpg',
      index: 40,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas41.jpg',
      index: 41,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas42.jpg',
      index: 42,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas43.jpg',
      index: 43,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas44.jpg',
      index: 44,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas45.jpg',
      index: 45,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas46.jpg',
      index: 46,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas47.jpg',
      index: 47,
      rows: isMobile ? 2 : 4,
      cols: 2,
    },
    {
      img: 'catarinaelukas48.jpg',
      index: 48,
      rows: isMobile ? 2 : 4,
      cols: 2,
    }]

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
          <Box display='flex' justifyContent='center' sx={{
                marginTop:10
                }}>
                <Swiper style={{width: '90%', height: isMobile ? '300px' : '650px', zIndex:0}}
                  spaceBetween={30}
                  centeredSlides={true}
                  speed={4200}
                  autoplay={{
                    delay: 2900,
                    
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  >
                  {photosCatarinaLukas.map((item) => (
                  <SwiperSlide 
                    style={{
                      textAlign: 'center', 
                      fontSize: '18px', 
                      background: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <img
                         src={item.img}
                         alt={item.title}
                         loading="lazy"
                         style={{borderRadius:'7px', display: 'block', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} />
                  </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Countdown />    
      
       
       
        <Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 32 : 44,
              marginTop: 7,
              padding:2
            }}>
              {weddingText}
          </Typography>
          <Box display='flex' justifyContent='end' marginRight= {isMobile ? '40px' : '500px'} >
          {<img style={{ width:'90px', transform: 'rotate(260deg)', filter: 'grayscale(20%)'}} src={photoFolhas.image}/>}
          </Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 30 : 40,
              marginTop: 0
            }}>
              {weddingDay}
          </Typography>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: isMobile ? 30 : 40,
              marginTop: 0
            }}>
              {weddingPlace}
          </Typography>
          <Box display='flex' justifyContent='start' marginLeft={isMobile ? '40px' : '500px'}>
          {<img style={{ width:'90px', transform: 'rotate(70deg)', filter: 'grayscale(20%)'}} src={photoFolhas.image}/>}
          </Box>
          
        </Box>
     <Footer />
    </ThemeProvider>
  );
}